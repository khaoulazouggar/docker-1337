FROM debian
MAINTAINER kzouggar <khaoulazouggar@gmail.com>

RUN apt-get update -y && apt-get upgrade -y &&\
	apt-get install wget -y &&\
	apt-get install bzip2 -y &&\
	wget https://files.teamspeak-services.com/releases/server/3.9.1/teamspeak3-server_linux_amd64-3.9.1.tar.bz2 && \
	tar -xvf teamspeak3-server_linux_amd64-3.9.1.tar.bz2
                         

# 9987 default voice
# 10011 server query
# 30033 file transport

EXPOSE 9987/udp
EXPOSE 10011
EXPOSE 30033

ENV TS3SERVER_LICENSE accept

CMD ["sh", "./teamspeak3-server_linux_amd64/ts3server_minimal_runscript.sh"]

#docker build -t ex01 .
#docker run -it -p 9987:9987/udp -p 10011:10011/tcp -p 30033:30033/tcp --rm ex01

