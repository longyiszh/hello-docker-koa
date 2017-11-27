const http = require('http');

const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();

app.use(logger());

app.use(async (ctx) => {
  ctx.body = 'Hello Docker Koa!';
});

const server = http.createServer(app.callback());

server.listen(3000, () => {
  console.log("** koa started on port 3000. **");
});

module.exports = app;