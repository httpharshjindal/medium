import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import {
  signinBody,
  signupBody,
} from "@httpharshjindal/medium-common-package-updated";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

user.post("signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupBody.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json("inputs are not valid");
  }
  var res;

  try {
    res = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
  } catch (e) {
    console.log(e);
  }

  if (res) {
    const token = await sign({ id: res.id, email: res.email }, "secret");
    return c.json({
      jwt: token,
    });
  }
  return c.json({ msg: "user already exists" });
});

user.post("signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinBody.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json("inputs are not valid");
  }

  const res = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!res) {
    c.status(403);
    return c.json({ msg: "user not found" });
  } else if (res.password != body.password) {
    c.status(401);
    return c.json({ msg: "wrong credentials" });
  }

  const token = await sign({ id: res.id, email: res.email }, "secret");
  c.status(200)
  return c.json({ token: token });
});

export default user;
