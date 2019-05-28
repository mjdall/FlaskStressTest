FROM python:3.7-alpine

RUN apk add --no-cache gcc musl-dev linux-headers

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# could be configurable via test script
ENV APP_URL http://localhost:13361

# make sure the actual flask server is started
# HEALTHCHECK --interval=1s --timeout=3s \
#  CMD curl -f ${APP_URL} || exit 1

COPY ./test_is_prime.py .
COPY ./test_primes_stored.py .
COPY ./test_setup/ ./test_setup

# CMD "pytest ./test_is_prime.py ./test_primes_stored.py -v"
CMD [ "pytest", "test_is_prime.py", "test_primes_stored.py", "-v" ]
