FROM python:3.7-alpine

WORKDIR /primeApp

RUN apk add --no-cache gcc musl-dev linux-headers

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

ENV FLASK_APP prime.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_ENV development

COPY ./prime.py .

CMD ["flask", "run"]
