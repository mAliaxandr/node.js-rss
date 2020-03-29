# Guide for task:

1. Fork this repository
2. Clone
3. Go to folder `task1`
4. To install all dependencies use [`npm install`]

# CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

# Usage (for example):
1. [`node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"`]
2. [`node index.js --action encode --shift 7 --input "./input.txt" --output "./output.txt"`]