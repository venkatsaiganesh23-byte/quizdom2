const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <h1>QUIZDOM Backend Running! 🚀</h1>
        <p>Your backend is working!</p>
        <script>window.location.href = 'FRONT-END1.75.html';</script>
    `);
});

server.listen(5000, () => {
    console.log('🎯 Simple backend running on http://localhost:5000');
});