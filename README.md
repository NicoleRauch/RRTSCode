# RR3Code
Code for a 3-day React-Redux training.

## Prerequisites

The installation is easiest on Linux and Mac (because C++ and Python are already installed).
But it is of course feasible on Windows, too.

* Node.js version 6.x or greater
* A suitable editor or IDE
   * e.g. Webstorm -- [there is a 30-day test version](https://www.jetbrains.com/webstorm/download/)
* Ideally Chrome (Firefox works as well)
* C++ and Python -- detailed installation instructions can be found in the node-gyp module README, section ["You will also need to install"](https://github.com/nodejs/node-gyp#installation)

## First Steps
* Check out the repository from GitHub (or copy the zipfile and unzip it)
* cd into that directory
* Install required modules: `npm install`
* Launch the development server:
   * Mac/Linux users: `npm start`
   * Windows users: `npm run start-win`

After that:

* open [http://localhost:3000](http://localhost:3000) in the browser

## Building the JS-Bundle
* Mac/Linux users: `npm run build`
* Windows users: `npm run build-win`
* open `build/index.html` in the browser

## Trying out the solutions
Webpack accesses the files in the folder `src` by default. This way, you can implement and experiment with your own solutions step by step during the training.

To use the included examples, open the file `webpack.config.js` and change the path in the block `entry` such that it points to one of the other `index.js` files. Example:

```
    entry: [
        "./src-solution-redux-3/index"
    ],
```

The examples are fully functional and build on each other (in alphabetical order, except for "async" and "forms"). Please be aware that the final example requires a server to handle the emitted AJAX requests. A basic server is provided in the directory `backend`.
