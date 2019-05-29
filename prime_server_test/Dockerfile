FROM python:3.7-alpine

RUN apk add --no-cache gcc musl-dev linux-headers

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# could be configurable via test script
ENV APP_URL http://localhost:13361

# make sure the actual flask server is started
HEALTHCHECK CMD curl --fail "$APP_URL/isPrime/0" || exit 1

COPY ./test_is_prime.py .
COPY ./test_primes_stored.py .
COPY test_util ./test_util

# CMD "pytest ./test_is_prime.py ./test_primes_stored.py -v"
CMD [ "pytest", "test_is_prime.py", "test_primes_stored.py", "-v" ]
