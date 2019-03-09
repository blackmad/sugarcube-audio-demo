#!/bin/sh

cp ~/Dropbox/Narrative\ Experiments/Twine/Stories/talya2.html .
# direct compile
# ./tweego/tweego-mac-x64  -f sugarcube-3 -o output/index.html talya2.html js/*.js js/*/*.js css/test.css  && open -a Google\ Chrome output/index.html


# decompile + reprocess + recompile
./decompile.sh
./reprocess-tw2-newlines.py output/talya.twee
./tweego/tweego-mac-x64 -s Start  -f sugarcube-3 -o output/index.html output/talya.twee-edited.twee js/*.js js/*/*.js css/test.css && open -a Google\ Chrome output/index.html