#!/bin/sh
cp ~/Dropbox/Narrative\ Experiments/Twine/Stories/talya2.html .

./tweego/tweego-mac-x64  -f sugarcube-3 -d -o output/talya.twee talya2.html js/*.js js/*/*.js css/test.css
