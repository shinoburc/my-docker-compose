#!/bin/sh

tar zxf $1 -C ./
sudo cp -r dokuwiki/* /usr/share/nginx/html/dokuwiki/.
sudo service php5-fpm restart
sudo rm -rf /usr/share/nginx/html/dokuwiki/data/cache/*
