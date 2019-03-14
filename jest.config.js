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
        ".",
    ],
    "setupTestFrameworkScriptFile": "./enzymeSetup.ts",
    "testRegex": "\\.*[tT]est\\.tsx?$",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testURL": "http://localhost"
};
