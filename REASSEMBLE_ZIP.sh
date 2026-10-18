#!/bin/bash
# Reconstruct the original voice-of-store-engine.zip from base64 parts
set -e
echo "Reconstructing original zip..."
cat zip.b64.part0{0,1,2,3,4,5,6,7,8,9} | base64 -d > voice-of-store-engine.zip
echo "  ✓ voice-of-store-engine.zip created"
echo "Now run: unzip voice-of-store-engine.zip"
