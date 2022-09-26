const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to my home page')
    }
    else if(req.url === '/about') {
        res.end('About me')
    }
    else {
        res.end(
            `
                <h1> OOPS!</h1>
                <p>404! Page not found</p>
                <a href="/">Back home</a>
            `
        )
    }
})

server.listen(3060)