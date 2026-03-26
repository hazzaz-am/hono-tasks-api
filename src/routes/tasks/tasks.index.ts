import { createRouter } from "@/lib/create-app";
import * as handlers from "./tasks.handlers";
import * as routes from "./tasks.routes";

export const tasksRouter = createRouter().openapi(routes.list, handlers.list);