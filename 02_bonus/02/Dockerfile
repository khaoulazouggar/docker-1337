#debian version for nodejs using yarn devlopment
FROM debian:latest

RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y build-essential vim git curl \
	apt-transport-https ca-certificates software-properties-common && \
	#install nodejs
	curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
	apt-get install -y nodejs && \
	#install yarn
	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
	echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
	apt-get update && \
	apt-get install -y yarn && \
	mkdir /root/apps

WORKDIR /root/apps

EXPOSE 80 443

ENTRYPOINT ["bash"]
