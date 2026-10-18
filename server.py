"""
Voice-of-Store Engine (VoSE) - Local Web Server
AP Mega Hackathon 2026 • Problem Statement R5 (Retail)
"""

import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching disabled for seamless live hackathon demo
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run():
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                print(f"===========================================================")
                print(f"  VoSE - Voice-of-Store Engine (Demo Platform)             ")
                print(f"  AP Mega Hackathon 2026 | Problem Statement R5 (Retail)   ")
                print(f"===========================================================")
                print(f"  Local Server running at: http://localhost:{port}")
                print(f"  Serving files from: {DIRECTORY}")
                print(f"  Press Ctrl+C to terminate.")
                print(f"===========================================================")
                sys.stdout.flush()
                httpd.serve_forever()
                break
        except OSError as e:
            if "Address already in use" in str(e) or "Only one usage" in str(e):
                port += 1
            else:
                raise e

if __name__ == "__main__":
    run()
