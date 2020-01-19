#devlopment env for ruby
FROM debian:latest

RUN apt-get update && apt-get upgrade -y && \
	apt-get install vim git curl ruby-full -y && \
	mkdir /root/apps

WORKDIR /root/apps
ENTRYPOINT ["bash"]
