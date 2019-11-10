module.exports = function() {
    const template = `
    import React from 'react';
    import '../css/home.css';

    export default class Home extends React.Component{
        render(){
            return(
                <h2>Hello</h2>
            )
        }
    }
    `;
    return {
      template,
      dir: "src/pages/js",
      name: "home.js"
    };
  };
  