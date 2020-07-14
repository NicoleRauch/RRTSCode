/* global module */

module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "roots": [
        "test-solution-react",
        "test-solution-redux",
        "test-solution-react-integration",
        "test-solution-async-calls"
    ],
    "setupFilesAfterEnv": ["./enzymeSetup.ts"],
    "testRegex": "\\.*[tT]est\\.tsx?$",
    "testURL": "http://localhost"
};
