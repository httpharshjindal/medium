import { Hono } from "hono";
import blog from "./blog";
import user from "./user";

const routeHandler = new Hono

routeHandler.route("/blog",blog)
routeHandler.route("/user",user)

export default routeHandler