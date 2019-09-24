"use strict";

module.exports = {
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!shared-github-internals|github-cherry-pick|github-rebase|probot-serverless-now)",
  ],
  preset: "ts-jest",
  reporters: ["default", ["jest-junit", { output: "./reports/junit.xml" }]],
  testEnvironment: "node",
  testRunner: "jest-circus/runner",
  globals: { "ts-jest": { isolatedModules: true } },
};
