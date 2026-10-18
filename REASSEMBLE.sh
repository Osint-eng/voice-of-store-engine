#!/bin/bash
# Reassemble the split source files for Voice-of-Store Engine
set -e
echo "Reassembling Voice-of-Store Engine source files..."

cat index.html.part00 index.html.part01 index.html.part02 index.html.part03 index.html.part04 index.html.part05 index.html.part06 index.html.part07 index.html.part08 index.html.part09 index.html.part10 index.html.part11 index.html.part12 index.html.part13 index.html.part14 index.html.part15 > index.html
echo "  ✓ index.html"

cat data.js.part00 data.js.part01 data.js.part02 data.js.part03 data.js.part04 data.js.part05 data.js.part06 data.js.part07 data.js.part08 data.js.part09 data.js.part10 data.js.part11 data.js.part12 data.js.part13 data.js.part14 data.js.part15 data.js.part16 data.js.part17 data.js.part18 data.js.part19 data.js.part20 data.js.part21 data.js.part22 data.js.part23 > data.js
echo "  ✓ data.js"

cat app.js.part00 app.js.part01 app.js.part02 app.js.part03 app.js.part04 app.js.part05 app.js.part06 app.js.part07 app.js.part08 app.js.part09 app.js.part10 app.js.part11 app.js.part12 app.js.part13 app.js.part14 app.js.part15 app.js.part16 app.js.part17 app.js.part18 app.js.part19 app.js.part20 app.js.part21 app.js.part22 app.js.part23 app.js.part24 app.js.part25 app.js.part26 app.js.part27 app.js.part28 app.js.part29 > app.js
echo "  ✓ app.js"

echo ""
echo "Done! Files are ready."
echo "Run: python server.py"
