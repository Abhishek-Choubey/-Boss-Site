const PORT = 3500;
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data.json'));
const middlewares = jsonServer.defaults();

console.log(path.join(__dirname,"data.json"))
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/user", router);
server.listen(PORT, ()=> console.log(`Listening on Port: ${PORT}`))