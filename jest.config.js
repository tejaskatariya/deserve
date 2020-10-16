module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
    modulePaths: ["<rootDir>"],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
    moduleDirectories: ["node_modules", "src"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    collectCoverageFrom: [
      "src/**/*.js",
      "src/**/*.tsx",
      "!src/index.js",
      "!src/index.tsx",
    ],
    coverageReporters: ["text"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
  };