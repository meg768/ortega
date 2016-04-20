import React from 'react';
import Spinner from 'react-spinkit';
import Model from '../../scripts/model.js';

import {sprintf} from '../../scripts/toolbox.js';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import {Panel, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';


var UserItem = React.createClass({

	getInitialState(){
		return {
		};
	},

	getDefaultProps() {
		return {
		};
	},	
				
	componentWillUnmount() {
	},

	componentDidMount() {
	},

	render() {
		return (
			<ListGroupItem href={sprintf('#/user/%d', this.props.user.id)} header={this.props.user.name}>
				{this.props.user.username}
			</ListGroupItem>
		);
	}
	
});



var UserItems = React.createClass({

	getInitialState(){
		return {
		};
	},

	getDefaultProps() {
		return {
			users: null
		};
	},	
				
	componentWillUnmount() {
	},

	componentDidMount() {
		
	},

	render() {

		var _this = this;
		var items = [];

		if (_this.props.users != null) {
			_this.props.users.forEach(function(user, index) {
				items.push(
					<UserItem user={user} key={index}/>
				);
			});
	
			return (
				<ListGroup>
					{items}
				</ListGroup>

			);
			
		}

	}



});



module.exports = React.createClass({


	getInitialState() {
	
		var state = {};
		
		state.users = null;

		return state;
	},
	
	
	componentDidMount() {
		
		var _this = this;

		console.log('Fetching users...');

		var request = Model.Users.fetch();
		

		request.done(function(users) {
			console.log('Done.');
			_this.setState({users:users});				
		});	

	
	},

	
	renderList() {

		if (this.state.users != null) {
			
			return (
				<Row>
					<Col xs={12} md={8} lg={6} style={{marginLeft:'auto', marginRight:'auto', float:'none'}}>
						<UserItems users={this.state.users}/>
					</Col>
				</Row>
			);
			
		}
	},
	
	renderSpinner() {

		if (this.state.users == null) {
			return (
				<Row style={{textAlign:'center', padding:'1em'}}>
					<Col>
						<Spinner spinnerName='three-bounce'  noFade/>
					</Col>
				</Row>
			);
		}
	},
	
	renderButton() {
		if (this.state.users != null) {
			return (
				<Row style={{textAlign:'center', padding:'1em'}}>
					<Col>
						<Button href='#/user' bsStyle='primary'>
							<Glyphicon glyph="plus" />
						</Button>
					</Col>	
				</Row>
			);		
			
		}
	},
	
	render() {
		return (
			<Grid style={{}}>
				{this.renderSpinner()}
				{this.renderList()}
				{this.renderButton()}
			</Grid>
			
		);
	}

});

