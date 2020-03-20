// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // preprocess *.ts test files with ts-jest
  preset: 'ts-jest',

  // include *.spec.ts and *.spec.js files
  testMatch: [
    '**/*.spec.{ts,js}'
  ],

  // preprocess *.svelte files with svelte-processor (configured via svelte.config.js)
  transform: {
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }]
  },

  // support *.js, *.ts and *.svelte files in tests
  moduleFileExtensions: ["js", "ts", "svelte"],

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
