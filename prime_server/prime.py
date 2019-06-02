"""
=====================================
Flask Server for check Prime Numbers.
=====================================
"""

import sys
import time
import redis
import random

from flask import Flask, jsonify

app = Flask(__name__)
redis_cache = redis.Redis(host='redis', port=6379)
PRIME_HASH = 'PrimeNumbers'
CONN_RETRIES = 5


def retry_redis_method(redis_method, retries=CONN_RETRIES, error_log_msg=''):
    """
    Retries `redis_method` `retries` number of times.
    Will retry when a ConnectionError is thrown.
    """
    while True:
        try:
            return redis_method()
        except redis.exceptions.ConnectionError as exc:
            if not retries:
                # log the message if usr message passed in
                if error_log_msg:
                    print(error_log_msg, file=sys.stderr)
                    print(exc, file=sys.stderr)
                    return None
                else:
                    raise exc
            retries -= 1
            time.sleep(0.5)


def lookup_prime_in_cache(number):
    """Checks if we've cached a prime number in our redis instance."""

    def check_prime_cached():
        return redis_cache.hexists(PRIME_HASH, number)

    return retry_redis_method(check_prime_cached)


def add_prime(prime_number):
    """
    Adds a new prime number to the redis instance.
    Logs any ConnectionErrors.
    """

    def set_prime_entry():
        redis_cache.hset(PRIME_HASH, prime_number, prime_number)

    retry_redis_method(
        set_prime_entry,
        error_log_msg='error connecting to redis while caching prime')


def is_prime_number(n):
    """
    Miller-Rabin primality test.
    see: https://rosettacode.org/wiki/Miller%E2%80%93Rabin_primality_test#Python

    A return value of False means n is certainly not prime. A return value of
    True means n is very likely a prime.
    """
    if n != int(n):
        return False
    n = int(n)

    # Miller-Rabin test for prime
    if n in {0, 1, 4, 6, 8, 9}:
        return False

    if n in {2, 3, 5, 7}:
        return True

    s = 0
    d = n - 1
    while d % 2 == 0:
        d >>= 1
        s += 1
    assert (2 ** s * d == n - 1)

    def trial_composite(a):
        if pow(a, d, n) == 1:
            return False
        for i in range(s):
            if pow(a, 2 ** i * d, n) == n - 1:
                return False
        return True

    for i in range(8):  # number of trials
        a = random.randrange(2, n)
        if trial_composite(a):
            return False

    return True


@app.route('/isPrime/<int:number_to_check>')
def is_prime(number_to_check):
    """Route for checking if a number is a prime number."""
    try:
        if lookup_prime_in_cache(number_to_check):
            return '%d is prime' % number_to_check
    except redis.exceptions.ConnectionError:
        # if redis can't be connected to
        # we can still manually compute the
        # prime and return
        pass

    a_prime = is_prime_number(number_to_check)

    if not a_prime:
        return '%d is not prime' % number_to_check

    add_prime(number_to_check)
    return '%d is prime' % number_to_check


@app.route('/primesStored')
def get_cached_primes():
    """Gets all of the currently cached primes in redis."""

    def get_primes_from_redis():
        return redis_cache.hgetall(PRIME_HASH)

    # pass error message
    raw_primes = retry_redis_method(
        get_primes_from_redis, error_log_msg='error retrieving cached primes')

    if raw_primes is None:
        return jsonify([])

    # primes are stored as prime:prime, so just get the keys
    decoded_primes = [
        int(prime.decode('utf-8')) for prime in raw_primes.keys()
    ]

    return jsonify(decoded_primes)


# add_prime(2147483647)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
