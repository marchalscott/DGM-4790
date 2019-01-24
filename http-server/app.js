const http = require('http');
const fs   = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-type', 'text/html')
        res.setHeader('Marchal', 'Marchal is cool')
        res.write('<html>')
        res.write('<head><title>This is my server</title></head>')
        res.write('<body><h1>Welcome to my server page.</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if (req.url === '/api') {
        console.log(req.rawHeaders)
        const marchal = {
            age: 27,
            hairColor: 'Brownish',
            sex: 'Male',
        }
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(marchal))
        return res.end()
    }
    if (req.url === '/user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody.split('=')[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }
});

server.listen(5000);