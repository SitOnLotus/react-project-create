module.exports = function() {
    const template = `
    import React from 'react';
    import {HashRouter, Route, Switch} from 'react-router-dom';
    import Home from './pages/js/home';
    //根组件
    export default class App extends React.Component{
        render(){
            return(
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </HashRouter>
            )
        }
    }
    `;
    return {
      template,
      dir: "src",
      name: "index.js"
    };
  };
  