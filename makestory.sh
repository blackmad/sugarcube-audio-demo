#!/bin/sh
cp  ../Twine/Stories/talya2.html .
./tweego-mac-x64  -f sugarcube-3 -o index.html talya2.html audioonend.js  && open -a Google\ Chrome index.html
