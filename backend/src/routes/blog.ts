import { Hono } from "hono";
import auth from "../middlewares/auth";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { validator } from "hono/validator";

import {
  blogBody,
  updateBlogBody,
} from "@httpharshjindal/medium-common-package-updated";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const res = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      published: true,
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return c.json({
    posts: res,
  });
});
blog.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const res = await prisma.post.findUnique({
    where: {
      id: c.req.param("id"),
    },
    select: {
      id: true,
      title: true,
      content: true,
      published: true,
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  if (!res) {
    return c.json({ msg: "post not found" });
  }
  return c.json({
    res: res,
  });
});

blog.use(auth);

blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = blogBody.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({ msg: "invalid inputs" });
  }
  const res = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorId: c.get("userId"),
    },
    select: {
      id: true,
    },
  });

  return c.json({ msg: "post created", res: res });
});

blog.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updateBlogBody.safeParse(body);
  console.log(success);
  if (!success) {
    c.status(403);
    return c.json({ msg: "invalid inputs" });
  }

  try {
    const res = await prisma.post.update({
      where: {
        id: c.req.param("id"),
        authorId: c.get("userId"),
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
    return c.json({ msg: "updated successfully", id: res.id });
  } catch (e) {
    return c.json({
      msg: "either you are trying to update others blog or someting went wrong",
    });
  }
});

export default blog;
