# webpack_demo

---

#### WebPack Demo

##### Step 0:   Install Node and NPM: https://nodejs.org/en/ 

##### Step 1: initialize a new application with npm init 
* type npm init in the terminal and answer the questions
* if you want to skip the questions, npm init -y gives you a default package.json


##### Step 2: Create an HTML file and two JavaScrtipt files
* HTML template: empty body (initially)
* in script1, create a function that appends a paragraph to the document body 
* in script2, call this function
* Include both JavaScript files in both orders (script1 first, script1 last), and observe what happens 


##### Step 3: Install Webpack: both npm install and npm i work
```
npm install webpack webpack-cli --save-dev
npm i webpack webpack-cli --save-dev
```


##### Step 4: Create a webpack.config.js file in the project folder

```
const path = require('path'); 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    mode: 'none'
}
```

##### Step 5: in package.json, add the script...

```
"webpack": "webpack"
```

##### then run your Webpack bundling using

```
npm run webpack
```
