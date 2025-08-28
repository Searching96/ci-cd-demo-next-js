const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^server-only$": "<rootDir>/__mocks__/server-only.js",
  },

  // Force Babel for everything
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/__mocks__/",
  ],

  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/__mocks__/",
  ],
};

module.exports = createJestConfig(customJestConfig);
