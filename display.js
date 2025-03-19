const http = require('http');
const PORT = 3012;

const server = http.createServer((req, res) => {
    const text = req.url.substring(1); 
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`You typed: ${text || 'Nothing'}`);
});

server.listen(PORT, () => {
    console.log('Server running at "http://localhost:${PORT}/"');
});