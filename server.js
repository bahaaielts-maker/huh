const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;
const UUID = 'ba0e3984-ccc9-48a3-8074-b2f507f41ce8';
const PATH = '/@nkka404';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('VLESS WebSocket Server is Running securely!\n');
});

const wss = new WebSocketServer({ server, path: PATH });

wss.on('connection', (ws, req) => {
    console.log('Client connected from:', req.socket.remoteAddress);
    
    ws.on('message', (message) => {
        // معالجة تدفق حزم بيانات V2Ray/VLESS
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});