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
        "."
    ],
    "setupFilesAfterEnv": ["./enzymeSetup.ts"],
    "testRegex": "Test\\.tsx?$",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testURL": "http://localhost"
};
