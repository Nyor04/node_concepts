const http = require('http')


const routes = {
    '/': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bienvenido a la pagina principal');
    },
    '/about': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Acerca de nosotros');
    },
    '/api': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hola desde la API' }));
    },
};


const server = http.createServer((req, res) => {
    const { url, method } = req;

    console.info(`Solicitud recibida: ${method} ${url}`);

 
    if (routes[url] && method === 'GET') {
        return routes[url](req, res);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Ruta no encontrada');
});

server.listen(3000, () => {
    console.info('Servidor escuchando en http://localhost:3000');
});
