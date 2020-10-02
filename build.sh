#!/bin/sh

set -e
rm -rf build

if [ "$CI" != true ] ; then
  ./node_modules/.bin/prettier --write .
  ./node_modules/.bin/eslint --fix .
fi

./node_modules/.bin/tsc
cp ./lib/* ./build/
