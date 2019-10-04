FROM ubuntu:18.04
LABEL Maintainer="dandydot"
RUN apt update \
      && apt install -y perl fcgiwrap perl-modules libcgi-session-perl \
      && apt install -y libhtml-treebuilder-xpath-perl libtext-mecab-perl mecab mecab-jumandic-utf8 libwww-perl libwww-wikipedia-perl \
      && apt install -y libxml-xpath-perl libhtml-parser-perl \
      && apt install -y libjson-perl libjson-xs-perl \
      && rm -rf /var/cache

ENTRYPOINT [ "fcgiwrap", "-s", "tcp:0.0.0.0:9000", "-f" ]
EXPOSE 9000
