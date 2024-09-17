import { Hono } from "hono";
import { verify } from "hono/jwt";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  },
  Variable:{
    userId:string
  }
}>();
async function auth(c: any, next: any) {
  const header = c.req.header("authorization");

  if (header) {
    const token = header.split(" ")[1];
    const res = await verify(token, "secret");
    if (res.id) {
      c.set('userId',res.id)     
      await next();
    }
  } else {
    return c.json({ msg: "you dont have access to this route"});
  }
}

export default auth;
