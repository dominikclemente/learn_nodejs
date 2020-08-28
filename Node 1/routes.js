const fs = require('fs');

const requestHandler = (req, res) => {

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My first NodeJS app</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body> ')
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><title>My first NodeJS app</title></head>');
    res.write('<body><h1>We the best music</h1></body> ')
    res.write('</html>');
    return res.end();

}

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';