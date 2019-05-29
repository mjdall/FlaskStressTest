"""
=============================================
Shared functions for test setup and teardown.
=============================================
"""

import os
import warnings
import redis
from Crypto.Util import number


def _get_app_url():
    """
    Gets the application route from environment.
    Raises RuntimeError if `APP_URL` not found in
        environment.
    :return: Application Route from environment
    """
    # make sure APP_URL is exported
    if 'APP_URL' not in os.environ:
        raise RuntimeError('`APP_URL` not exported in environment')

    return os.environ['APP_URL']


def check_prime(num):
    """
    :return: Whether a number is a prime number.
    """
    if num == 2 or num == 3:
        return True
    if num % 2 == 0 or num < 2:
        return False

    # only odd numbers
    for i in range(3, int(num**0.5) + 1, 2):
        if num % i == 0:
            return False

    return True


def get_random_primes(num_primes, bits=16):
    """
    :return: A list of `num_primes` random primes generated with `num_bits`.
    """
    if num_primes <= 0:
        return None

    # use a set so we don't need to worry about unique primes.
    # could check if bits are low and num primes is large.
    primes = set()
    while len(primes) != num_primes:
        # suppress deprecation warning
        with warnings.catch_warnings():
            warnings.simplefilter('ignore')
            primes.add(number.getPrime(bits))
    return list(primes)


def get_random_prime(bits=16):
    """
    :return: A random prime number.
    """

    with warnings.catch_warnings():
        warnings.simplefilter('ignore')
        return number.getPrime(bits)


def get_is_prime_route():
    """
    Gets the app url from environment and returns
    the isPrime route.
    :return: {app_url}/isPrime/
    """
    return _get_app_url() + '/isPrime/'


def get_primes_stored_route():
    """
    Gets the app url from environment and returns
    the primesStored route.
    :return:  {app_url}/primesStored/
    """
    return _get_app_url() + '/primesStored'


def get_redis_cache():
    """
    :return: Default redis instance.
    """
    return redis.Redis(host='127.0.0.1', port=6379)
