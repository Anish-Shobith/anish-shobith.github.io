import baseConfig from "@anishshobithps/eslint-config/base";
import reactConfig from "@anishshobithps/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
