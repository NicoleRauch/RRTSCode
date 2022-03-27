/* global module */

module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    roots: [
        "test",
        "test-typescript",
        "test-solution-react",
        "test-solution-redux",
        "test-solution-react-integration",
        "test-solution-async-calls",
        "test-solution-iots"
    ],
    setupFilesAfterEnv: ["./jest.setup.ts", "./enzymeSetup.ts"],
    testRegex: "\\.*[tT]est\\.tsx?$",
    testURL: "http://localhost"
};
