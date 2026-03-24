import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { treeifyError, z } from "zod";

expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"])
});

export type Env = z.infer<typeof EnvSchema>


// eslint-disable-next-line node/no-process-env
const {data: env, error} = EnvSchema.safeParse(process.env)

if (error) {
  console.error("❌ Invalid ENV:");
  console.error(JSON.stringify(treeifyError(error).properties, null, 2));
  process.exit(1);
}

export default env!