#!/bin/bash
# Reassemble the split source files
set -e
echo "Reassembling Voice-of-Store Engine source files..."

cat index.html.part00 index.html.part01 index.html.part02 > index.html
echo "  ✓ index.html"

cat data.js.part00 data.js.part01 data.js.part02 data.js.part03 > data.js
echo "  ✓ data.js"

cat app.js.part00 app.js.part01 app.js.part02 app.js.part03 app.js.part04 > app.js
echo "  ✓ app.js"

echo ""
echo "Done! Files are ready."
echo "Run: python server.py"
chmod +x REASSEMBLE.sh 2>/dev/null || true
