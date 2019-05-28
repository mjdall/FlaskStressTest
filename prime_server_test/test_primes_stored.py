"""
==================================================
Black and White box tests for /primesStored/ route
==================================================
"""

import requests
from test_setup import get_primes_stored_route, get_is_prime_route, get_random_primes

STORED_PRIME_ROUTE = get_primes_stored_route()
IS_PRIME_ROUTE = get_is_prime_route()


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
    :return:
    """
    primes_to_add = get_random_primes(20, bits=16)
    initial_primes = set(__get_stored_primes())

    # generate a list of random primes until we have 20
    # primes that aren't already stored
    already_added = set(primes_to_add).intersection(initial_primes)
    while already_added:
        primes_to_add = get_random_primes(20, bits=32)

    for prime in primes_to_add:
        resp = requests.get(IS_PRIME_ROUTE + str(prime))
        assert resp.status_code == 200, 'non-200 status code'

    # get all of the primes now stored in redis
    primes_stored = __get_stored_primes()

    # get the intersection of stored + added primes
    # and make sure all primes were added
    assert all(str(added) in primes_stored for added in primes_to_add), \
        'not all added primes were added, expecting %s to show' % primes_to_add
