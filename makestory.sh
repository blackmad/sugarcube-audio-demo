#!/bin/sh
cp  ../Twine/Stories/talya2.html .
./tweego/tweego-mac-x64  -f sugarcube-3 -o output/index.html talya2.html js/*.js js/*/*.js css/test.css  && open -a Google\ Chrome output/index.html
