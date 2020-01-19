#devlopment env for php
FROM debian:latest

RUN apt-get update && apt-get upgrade -y && \
	apt-get install vim git apt-transport-https ca-certificates \
	curl gnupg software-properties-common apache2 -y && \
	#installing php
	curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add - && \
	add-apt-repository "deb https://packages.sury.org/php/ $(lsb_release -cs) main" && \
	apt-get update && apt-get install php7.2-common php7.2-cli -y && \
	apt-get install php7.2 libapache2-mod-php -y

WORKDIR /var/www/html
ENTRYPOINT ["bash"]
