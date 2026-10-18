#!/bin/bash
# Reassemble the split source files for Voice-of-Store Engine
set -e
echo "Reassembling Voice-of-Store Engine source files..."

cat index.html.part0{0,1,2,3,4,5,6} > index.html
echo "  ✓ index.html"

cat data.js.part0{0,1,2,3,4,5,6,7,8,9} > data.js
echo "  ✓ data.js"

cat app.js.part{00,01,02,03,04,05,06,07,08,09,10,11} > app.js
echo "  ✓ app.js"

echo ""
echo "Done! Files are ready."
echo "Run: python server.py"
