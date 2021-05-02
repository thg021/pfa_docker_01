#!/bin/bash
dockerize -wait tcp://pfa-db:3306 -timeout 120s node index.js