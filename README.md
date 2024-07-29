# RRTSCode
Code for a React-Redux training in TypeScript.

## Prerequisites

To successfully use this codebase, please install:

* [Node.js version 18.x](https://nodejs.org/en/download/) or greater
* A suitable editor or IDE, e.g.
   * Webstorm -- [there is a 30-day test version](https://www.jetbrains.com/webstorm/download/)
   * Visual Studio Code -- [it is free](https://code.visualstudio.com/download)
* Chrome or Firefox

## First Steps
* Check out this repository from GitHub
* cd into that directory
* Install required modules: `npm install` (in case of errors please use `npm install --legacy-peer-deps`)
* Launch the development server:
  * `npm start`
  * Open [http://localhost:3000](http://localhost:3000) in the browser. You should see "Please replace this!".
* Run the tests:
  * `npm test` (either in the console or from your IDE)
  * There should be 1 passing test.


## Trying out the solutions
Webpack accesses the files in the folder `src` by default. This way, you can implement and experiment with your own solutions step by step during the training.

To use the included examples, open the file `webpack.config.js` and change the path in the block `entry` such that it points to one of the other `index.js` files. Example:

```
    entry: [
        "./src-solution-redux-3/index"
    ],
```

The examples are fully functional and build on each other (in alphabetical order, except for "async" and "forms"). Please be aware that the final example requires a server to handle the emitted AJAX requests. A basic server is provided in the directory `backend`.
