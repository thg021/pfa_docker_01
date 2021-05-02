#!/bin/bash
docker pull thgsdev/pfadb
docker pull thgsdev/pfanode
docker pull thgsdev/pfanginx

docker network create pfa

docker run -d --network pfa --name pfa-db thgsdev/pfadb
docker run -d --network pfa --name pfanode thgsdev/pfanode
docker run -d --network pfa -p 8080:80 thgsdev/pfanginx

docker ps
