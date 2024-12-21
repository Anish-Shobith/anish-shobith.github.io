import baseConfig, {
  restrictEnvAccess,
} from "@anishshobithps/eslint-config/base";
import nextjsConfig from "@anishshobithps/eslint-config/nextjs";
import reactConfig from "@anishshobithps/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
