module.exports = function() {
  const template = `
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './app';
  
  ReactDOM.render(
          <App />,
          document.getElementsByTagName('body')[0]
      )
  `;
  return {
    template,
    dir: "src",
    name: "index.js"
  };
};
