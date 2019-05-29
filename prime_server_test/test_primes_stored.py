"""
==================================================
Black and White box tests for /primesStored/ route
==================================================
"""

import requests
import test_util

STORED_PRIME_ROUTE = test_util.get_primes_stored_route()
IS_PRIME_ROUTE = test_util.get_is_prime_route()
redis_cache = test_util.get_redis_cache()
PRIME_HASH = 'PrimeNumbers'


def __get_stored_primes():
    """
    :return: List of stored primes from server.
    """
    resp = requests.get(STORED_PRIME_ROUTE)
    # assert resp.status_code == 200, 'non-200 status code getting stored primes'
    return resp.json()


def test_adding_primes():
    """
    Adds a list of 20 primes that aren't already stored in
    the servers database.
    Asserts all of the responses have a 200 status code.
    Asserts all of the primes were added to the stored list.
    """
    primes_to_add = test_util.get_random_primes(20, bits=16)
    initial_primes = set(__get_stored_primes())

    # generate a list of random primes until we have 20
    # primes that aren't already stored
    already_added = set(primes_to_add).intersection(initial_primes)
    while already_added:
        primes_to_add = test_util.get_random_primes(20, bits=32)

    for prime in primes_to_add:
        resp = requests.get(IS_PRIME_ROUTE + str(prime))
        assert resp.status_code == 200, 'non-200 status code'

    # get all of the primes now stored in redis
    primes_stored = __get_stored_primes()

    # get the intersection of stored + added primes
    # and make sure all primes were added
    assert all(added in primes_stored for added in primes_to_add), \
        'not all added primes were added, expecting %s to show' % primes_to_add


def test_primes_stored_against_cache():
    """
    White box test for ensuring the returned primes
    are what's in the database.

    note: could have synchronisation issues.
    Requires redis port to be exposed on host.
    """
    # request primes from server
    primes_stored = __get_stored_primes()

    # request primes from redis cache
    raw_primes = redis_cache.hgetall(PRIME_HASH)

    decoded_primes = [
        int(prime.decode('utf-8')) for prime in raw_primes.keys()
    ]
    assert primes_stored == decoded_primes, 'cached primes don\'t match'


def test_make_sure_cache_only_holds_primes():
    """
    Checks all of the stored numbers are actually primes.
    """
    stored_primes = __get_stored_primes()
    for prime in stored_primes:
        assert test_util.check_prime(
            prime), 'found non-prime `%d` in cache' % prime


def test_adding_prime_via_redis():
    """
    Adds a prime to the running redis instance.
    Asserts the prime show up when /primesStored is called.
    """
    current_primes = __get_stored_primes()
    prime = test_util.get_random_prime(bits=32)
    while prime in current_primes:
        prime = test_util.get_random_prime(bits=32)

    redis_cache.hset(PRIME_HASH, prime, prime)
    updated_primes = __get_stored_primes()
    assert prime in updated_primes, 'manually set prime `%d` not in %s' % (
        prime, updated_primes)
