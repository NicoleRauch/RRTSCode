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
        "./src*",
        "./test"
    ],
    "setupFilesAfterEnv": ["./enzymeSetup.ts"],
    "testRegex": "\\.test\\.tsx?$",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testURL": "http://localhost"
};
