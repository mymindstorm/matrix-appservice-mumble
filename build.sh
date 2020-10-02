#!/bin/sh

set -e
rm -rf build

./node_modules/.bin/prettier --write .
./node_modules/.bin/eslint --fix .

./node_modules/.bin/tsc
cp ./lib/* ./build/
