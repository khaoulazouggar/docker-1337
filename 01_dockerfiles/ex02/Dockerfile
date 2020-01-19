FROM ruby

RUN apt-get update -y && \
	apt-get install -y sqlite3 nodejs ruby-dev  && \
	gem update && \
	gem install bundler rails

#copy app
ONBUILD	ADD app /opt/app
ONBUILD WORKDIR /opt/app/
ONBUILD RUN bundle install
ONBUILD RUN bin/rake db:migrate && bin/rake db:seed

#docker build -t ft-rails:on-build .
