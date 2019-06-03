FROM anapsix/alpine-java:8_jdk

ENV JMETER_VER "apache-jmeter-5.1.1"
RUN wget "https://www-us.apache.org/dist//jmeter/binaries/${JMETER_VER}.tgz"
RUN tar zxvf ${JMETER_VER}.tgz
RUN mv "/${JMETER_VER}" "/jmeter"

ENV PATH "/jmeter/bin:${PATH}"

WORKDIR /testing

COPY ./tests ./tests/
COPY ./run-tests ./

CMD [ "./run-tests" ]
