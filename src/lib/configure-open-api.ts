import type { AppOpenAPI } from "./types.js";
import { swaggerUI } from '@hono/swagger-ui';
import { Scalar } from '@scalar/hono-api-reference';
import packageJson from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "Tasks API"
    }
  });

  // SCALAR UI
  app.get('/scalar', Scalar({
    url: '/doc', pageTitle: "API Reference", theme: "kepler", layout: "classic", defaultHttpClient: {
      targetKey: "js",
      clientKey: "fetch"
    }
  }));

  // SWAGGER UI
  app.get('/ui', swaggerUI({ url: '/doc', title: "API Documentation" }));
}