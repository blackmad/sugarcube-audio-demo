#!/usr/bin/python

import sys

input = open(sys.argv[1])
output = open(sys.argv[1] + '-edited.twee', 'w')

prevLine = ''
line = input.readline()
nextLine = input.readline()

while (line):
  if line.startswith('::'):
    output.write('\n')
  if line.startswith('<<'):
    line = line.strip()

  if line == '\n':
    if nextLine == '\n' or nextLine.startswith('<<') or prevLine.startswith('<<'):
      pass
    else:
      output.write(line)
  else:
    output.write(line)
  prevLine = line
  line = nextLine
  nextLine = input.readline()


