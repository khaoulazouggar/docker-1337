#debian version for C/C++ devlopment
FROM debian:latest

RUN apt-get update && apt-get upgrade -y && \
	apt-get install build-essential wget vim git -y && \
	mkdir /root/apps

WORKDIR /root/apps
ENTRYPOINT ["bash"]
