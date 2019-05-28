"""
=====================================================
Black and White box tests for /isPrime/{number} route
=====================================================
"""

import requests
from test_setup import get_is_prime_route, get_random_primes

PRIME_ROUTE = get_is_prime_route()


def test_valid_primes():
    """
    Tests prime numbers.
    Asserts 200 status code.
    Asserts resp text in format `{number} is prime`.
    """
    # always test 2 as it's a boundary value
    valid_primes = [2] + get_random_primes(5)
    for prime in valid_primes:
        resp = requests.get(PRIME_ROUTE + str(prime))

        assert resp.status_code == 200, \
            'non-200 status code: %d' % resp.status_code

        assert resp.text == '%d is prime' % prime, \
            'invalid response `%s` for prime number %d' % (resp.text, prime)


def test_composite_numbers():
    """
    Tests natural numbers that are not primes (composite numbers).
    Asserts 200 status code.
    Asserts resp text in format: `{composite} is not prime`.
    """
    composite_numbers = [0, 1, 498, 514, 891516]
    for number in composite_numbers:
        resp = requests.get(PRIME_ROUTE + str(number))

        assert resp.status_code == 200, \
            'non-200 status code: %d' % resp.status_code

        assert resp.text == '%d is not prime' % number, \
            'invalid response `%s` for composite number %d' % (resp.text, number)


def test_invalid_numbers():
    """
    Tests invalid numbers such as `1a, None, True, one`.
    Asserts status code is 404.
    """
    invalid_requests = ["1a", "one", "a", None, True]
    for invalid in invalid_requests:
        resp = requests.get(PRIME_ROUTE + str(invalid))

        assert resp.status_code == 404, \
            'invalid status code `%d` sending `%s`' % (resp.status_code, str(invalid))
