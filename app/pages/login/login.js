import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'react-spinkit';
import {Input, Button, Grid, Row, Col, Image, Page, CheckBox, ButtonGroup} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {extend, sprintf, isString, isObject, isArray} from '../../scripts/toolbox.js';
import Gopher from '../../scripts/gopher.js';
import nordnet from '../../scripts/nordnet.js'

require('./login.less');


/*


var Nordnet = function() {
	
	
	var _session = {};
	var _this = this;
	var _gopher = new Gopher('https://api.test.nordnet.se/next/2');
	
	var _defaultHeaders = {
		'accept': 'application/json',
		'content-type': 'application/json'
	};
	

	this.request = function(method, path, params) {
		var headers = {};
		extend(headers, _defaultHeaders);
		
		// Add authorization
		headers['Authorization'] = sprintf('Basic %s', new Buffer(sprintf('%s:%s', _session.session_key, _session.session_key)).toString('base64'));

		return _gopher.request(method, path, params, headers);
		
	};
	
	this.login = function(user, password) {
			
	
		function encryptLogin(user, password) {
			
			var ursa = require('ursa-purejs');
	
			var key = '';
			key += '-----BEGIN PUBLIC KEY-----' + '\n';
			key += 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5td/64fAicX2r8sN6RP3' + '\n';
			key += 'mfHf2bcwvTzmHrLcjJbU85gLROL+IXclrjWsluqyt5xtc/TCwMTfC/NcRVIAvfZd' + '\n';
			key += 't+OPdDoO0rJYIY3hOGBwLQJeLRfruM8dhVD+/Kpu8yKzKOcRdne2hBb/mpkVtIl5' + '\n';
			key += 'avJPFZ6AQbICpOC8kEfI1DHrfgT18fBswt85deILBTxVUIXsXdG1ljFAQ/lJd/62' + '\n';
			key += 'J74vayQJq6l2DT663QB8nLEILUKEt/hQAJGU3VT4APSfT+5bkClfRb9+kNT7RXT/' + '\n';
			key += 'pNCctbBTKujr3tmkrdUZiQiJZdl/O7LhI99nCe6uyJ+la9jNPOuK5z6v72cXenmK' + '\n';
			key += 'ZwIDAQAB' + '\n';
			key += '-----END PUBLIC KEY-----';
			
	
			var rsaPublic = key;
			
			
			var key = ursa.createPublicKey(rsaPublic, 'utf8');
			
	
			var auth = new Buffer(user).toString('base64');
			auth += ':';
			auth += new Buffer(password).toString('base64');
			auth += ':';
			auth += new Buffer('' + new Date().getTime()).toString('base64');
			return key.encrypt(auth, 'utf8', 'base64', ursa.RSA_PKCS1_PADDING).toString('base64');
		}
			
		var params = {};
		params.service = 'NEXTAPI';
		params.auth    = encryptLogin(user, password);
		
		var request = _gopher.request('post', 'login', params, _defaultHeaders);
		
		request.then(function(session) {
			_session = session;
			console.log('Login succeeded.', session);
		});
		
		request.catch(function(){
			_session = {};
			console.log('Login failed.');
		});

		return request;
		
	};
	


	

};


var next = new Nordnet();

*/
module.exports = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	
	propTypes: {
		username : React.PropTypes.string,
		password : React.PropTypes.string
	},

	loadState() {
		if (!isString(localStorage.loginPage))
			localStorage.loginPage = '';
	
		var storage = undefined;
		
		try {
			console.log('Parsing', localStorage.loginPage);
			storage = JSON.parse(localStorage.loginPage);
			
		}
		catch(error) {
			console.log('Parsing failed', error);
			storage = {};
			
		}
		var state = {};

		state.email    = isString(storage.email) ? storage.email : '';
		state.password = '';
		state.spinning = false;
		state.working  = false;

		return state;
		
	},

	saveState(state) {
		localStorage.loginPage = JSON.stringify({
			email: state.email
		});
		
	},

	getInitialState() {
		return this.loadState();
	},
	

	componentDidMount() {
		
	},

	componentWillMount() {
	},
	
	componentWillUnmount() {
		this.saveState(this.state);
		
	},
	
	componentDidUpdate(prevProps, prevState) {
	},
	
	onChange(event) {
		var target = event.target;
		var state = {};
		
		switch(target.name) {
			case 'email': {
				this.setState({email:target.value});
				break;
			}
			case 'password': {
				this.setState({password:target.value});
				break;
			}
		}
 		

	},

	
	login() {
		var component = this;
		var request = nordnet.login('meg768', 'P0tatismos');
		var completed = false;
				
		component.setState({working:true});

		var button = $(ReactDOM.findDOMNode(component.refs.button));
		
		button.transition({
			opacity: 0.5
		}, 200);

		request.then(function() {
		});


		request.finally(function() {
			component.setState({working:false});
			
			button.transition({
				opacity: 1.0
			}, 100);

			if (nordnet.isAlive())
				component.context.router.push('#/home');

		});

	},


	render() {

		var component = this;
		
		var renderSpinner = function() {
			if (component.state.working) {
				return (
					<Row style={{textAlign:'center', padding:'1em'}}>
						<br/>
						<Spinner spinnerName='three-bounce' noFade/>
					</Row>

				);
				
			}
				
			
		}
		
		var page = (
				<Grid>
					<Row>
						<Col mdPush={3} sm={12} md={6}>
							<Input name='email' ref='email' disabled={this.state.working} type="email" placeholder="E-postadress" value={this.state.email} onChange={this.onChange} />
							<Input name='password' ref='password' disabled={this.state.working} type="password" placeholder="Lösenord" value={this.state.password} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={6} mdPush={3}>
							<div style={{'textAlign':'center'}}>
								<Button ref='button' style={{fontSize:'200%', width:'2.3em', height:'2.3em',borderRadius:'50%'}} bsStyle="primary" onClick={this.login}>
									<Glyphicon glyph='chevron-right' style={{}}/>
								</Button>
								
							</div>
						</Col>
					</Row>
					
					{renderSpinner()}
					
				</Grid>	
			
		);

		return (
			<div id='LoginPage'>
					{page}
			</div>
		);

	}

});

