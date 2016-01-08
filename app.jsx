var React = require('react');
var Router = require('react-router');
var DefaultRoute = require('react-router').DefaultRoute;
var RouteHandler = require('react-router').RouteHandler;
var Route = require('react-router').Route;


import React from 'react';  
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var Router = require('react-router'); 

console.log(Router);

require('./styles.less');

var App = React.createClass({  

	render() {
		return (
			<div >
				<div style={{}}>
					<RouteHandler/>
				</div>
			</div>
		
		);
	}
});

var routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={require('./pages/test.jsx')} />  
  	
    <Route name="kalle"    path="/kalle"    handler={require('./pages/test.jsx')}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
	React.render(<Handler/>, document.body);
});