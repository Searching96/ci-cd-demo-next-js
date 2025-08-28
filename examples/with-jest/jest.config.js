const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Load Next.js config and env
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",

  // Fix: Jest can't handle Next.js "server-only" import
  moduleNameMapper: {
    "^server-only$": "<rootDir>/test/__mocks__/server-only.js",
  },

  // Ignore transforms for Next.js app router files that export metadata
  transformIgnorePatterns: [
    "/node_modules/",
    "app/.*\\.(ts|tsx)$", // Ignore Next.js App Router special files
  ],

  // Optional: skip running tests colocated with app router if needed
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
  ],
};

module.exports = createJestConfig(customJestConfig);
