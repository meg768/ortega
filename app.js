import React from 'react';  
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var Router = require('react-router'); //import {Router, DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//import Router from 'react-router';

console.log(Router);

require('./styles.less');

let App = React.createClass({  

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

let routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={require('./pages/test.js')} />  
  	
    <Route name="kalle"    path="/kalle"    handler={require('./pages/test.js')}/>
    
  </Route>
);

Router.run(routes, function (Handler) {  
	React.render(<Handler/>, document.body);
});