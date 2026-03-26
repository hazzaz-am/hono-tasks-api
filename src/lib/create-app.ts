import type { AppBindings } from "./types.js";
import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { logger } from "@/middlewares/pino-logger.js";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false
  });
}

export function createApp() {
  const app = createRouter();
  app.use(serveEmojiFavicon("🖥️"));
  app.use(logger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}