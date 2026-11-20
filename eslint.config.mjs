import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      ".expo/**",
      "dist/**",
      "coverage/**",
      "jest.config.js",
      "eslint.config.mjs"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      "no-console": "error",
      "eqeqeq": ["error", "always"],
      "complexity": ["error", 10],
      "max-lines-per-function": ["error", { "max": 50, "skipBlankLines": true, "skipComments": true }],
      "max-depth": ["error", 3],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": true,
          "ts-nocheck": true
        }
      ]
    }
  }
];
