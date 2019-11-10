module.exports = function(name) {
  const template = `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "jquery": "^3.4.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-router-dom": "^5.0.1",
    "style-loader": "^1.0.0",
    "webpack": "^4.39.3",
    "webpack-cli": "^3.3.8",
    "webpack-dev-server": "^3.8.0"
  },
  "author": "",
  "license": "ISC",

}
  `;
  return { template, dir: "", name: "package.json" };
};
