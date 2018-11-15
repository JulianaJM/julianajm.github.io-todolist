# todolist

A sandbox project to apply presets that i've learned


**dependencies usage reminder**

babel-core: Transforms your ES6 code into ES5

babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel

babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support

babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions

 webpack.config.js file to state the rules for our loaders.
.babelrc provide the options for babel-loader (You can include it in the webpack.config.js file)


**index.js** file to render the main app component

**index.html** file in the src folder where we can add our section element with id of the main app component.

**html-webpack-plugin** use in our webpack config file. This plugin generates an HTML file with <script> injected, writes this to dist/index.html, and minifies the file


**webpack-dev-server**
run this command every time you want to see your changes in the browser. 
To have webpack “watch” our changes and thus refresh whenever we have made changes to any of our components, 
we can use webpack-dev-server module

* start:server": "webpack-dev-server --mode development --open"
should see localhost:8080 open up in your default browser — that’s what the —-open flag is for. Now everytime you make changes, it will refresh the page

You can also add a --hot flag to your npm start script which will allow you to only reload the component that you’ve changed instead of doing a full page reload. This is Hot Module Replacement.


**css-loader style-loader**
As we will be importing CSS files into our React components, we need css-loader module to resolve them. 
we also need a style-loader to inject this into our DOM — adding a <style> tag into the <head> element of our HTML.

The order of adding loaders is important. 
First, we need to resolve the CSS files before adding them to the DOM with the style-loader. 
By default, webpack uses the loaders from the right (last element in the array) 
to the left (first element in the array).

We can also make CSS modular using webpack. This means class name will be scoped locally and specific to only the component in question.

As we need to give options, each loader is now an object with a key-value pair. To enable CSS modules, we need to set module option for css-loader to be true. The importLoaders option configures how many loaders before css-loader should be applied. For example, sass-loader would have to come before css-loader.

The localIdentName allows you to configure the generated identification.

[name] will take the name of your component

[local] is the name of your class/id

[hash:base64] is the randomly generated hash which will be unique in every component’s CSS

So with this, you won’t have to worry about whether you have given the same class name throughout your whole application — you only have to worry about whether you have used it in the same component.


**Tips:**

If you want to put that webpackconfig file in the different folder then use “webpack — config FOLDERNAME/webpack.config.js — mode development”

if you let "main": "index.js", in your package.json webpack will set automatically entry and output js bundle

windaube breaklinestyle
"linebreak-style": [0, "error", "windows"],
git config --global core.autocrlf false

Create a personalized and optimized webpack.config.js!
https://webpack.jakoblind.no/
