import type { AppOpenApi } from "./types.js";
import packageJson from "../../package.json"

export default function configureOpenAPI (app: AppOpenApi) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "Tasks API"
    }
  })
}