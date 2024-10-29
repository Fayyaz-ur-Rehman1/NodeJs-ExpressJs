// GET
// POST
// PUT
// PETCH
// DELETE

const http = require('http');

// Server creation
const server = http.createServer((req, res) => {
    // URL aur method ko check karne ke liye
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello! This is a GET request' + req.method);

    }
});

// Server ko port 3000 par listen karna
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
