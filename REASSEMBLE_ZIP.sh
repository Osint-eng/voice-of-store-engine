#!/bin/bash
# Reconstruct the original voice-of-store-engine.zip
set -e
echo "Reconstructing original zip from base64 parts..."
cat z.part00 z.part01 z.part02 z.part03 z.part04 z.part05 z.part06 z.part07 z.part08 z.part09 z.part10 z.part11 z.part12 z.part13 z.part14 z.part15 z.part16 z.part17 z.part18 z.part19 z.part20 z.part21 z.part22 z.part23 z.part24 z.part25 z.part26 z.part27 z.part28 z.part29 z.part30 z.part31 z.part32 | base64 -d > voice-of-store-engine.zip
echo "  ✓ voice-of-store-engine.zip created"
echo "Now run: unzip -o voice-of-store-engine.zip"
echo "Then: python server.py"
