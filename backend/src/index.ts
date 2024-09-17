import { Hono } from "hono";
import routeHandler from "./routes/routehandler";
import { cors } from "hono/cors";
const app = new Hono();

app.use("*", cors());
app.route("/api/v1", routeHandler);
app.use(
    '/api2/*',
    cors({
      origin: 'http://example.com',
      allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
      maxAge: 600,
      credentials: true,
    })
  )
export default app;
