#!/usr/bin/env python3
import http.server
import socketserver

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable all caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

PORT = 8002

with socketserver.TCPServer(('', PORT), NoCacheHTTPRequestHandler) as httpd:
    print(f'Serving on port {PORT} with caching disabled')
    print(f'Open http://localhost:{PORT}')
    httpd.serve_forever()
