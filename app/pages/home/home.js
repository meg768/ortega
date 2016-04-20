import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {extend, sprintf, isString, isObject, isArray} from '../../scripts/toolbox.js';
import nordnet from '../../scripts/nordnet.js';


class Accounts extends React.Component {
	
	constructor(...args) {
		super(...args);

		this.state = {accounts: null};


	}

	componentDidMount() {
		var self = this;
		var request = nordnet.request('get', 'accounts');

		request.then(function(accounts) {
			self.setState({accounts:accounts});	
		});
		
	};

	renderContent() {

		if (this.state.accounts == null)
			return <div>Loading...</div>;

		var items = [];
		
		this.state.accounts.forEach(function(item, index) {
			items.push(
				<ListGroupItem header={item.accno} key={index}>
					{item.type}
				</ListGroupItem>
			);
		});
		
		return (
			<div>
				{items}
			</div>
		);
		
	}
	
	
	render() {
		
		
		return (
			<div>
				<label>Konto</label>
				{this.renderContent()}
			</div>
		);
	};
};



class Instruments extends React.Component {
	
	constructor(...args) {
		super(...args);

		this.state = {instruments: null};


	}

	componentDidMount() {
		var self = this;
		var request = nordnet.request('get', 'instruments', {query:'HENNES', limit:10});

		request.then(function(instruments) {
			self.setState({instruments:instruments});	
		});
		
	};

	renderContent() {

		if (this.state.instruments == null)
			return <div>Loading...</div>;

		var items = [];
		
		this.state.instruments.forEach(function(item, index) {
			items.push(
				<ListGroupItem header={item.name} key={index}>
					{item.symbol}
				</ListGroupItem>
			);
		});
		
		return (
			<div>
				{items}
			</div>
		);
		
	}
	
	
	render() {
		
		
		return (
			<div>
				<label>Instrument</label>
				{this.renderContent()}
			</div>
		);
	};
};


class Markets extends React.Component {
	
	constructor(...args) {
		super(...args);

		this.state = {markets: null};


	}

	componentDidMount() {
		var self = this;
		var request = nordnet.request('get', 'markets');

		request.then(function(markets) {

			self.setState({markets:markets});	
		});
		
	};

	renderContent() {

		if (this.state.markets == null)
			return <div>Loading...</div>;

		var items = [];
		
		this.state.markets.forEach(function(item, index) {
			items.push(
				<ListGroupItem key={index}>
					{sprintf('%s - %s', item.name, item.market_id)}
				</ListGroupItem>
			);
		});
		
		return (
			<div>
				{items}
			</div>
		);
		
	}
	
	
	render() {
		
		
		return (
			<div>
				<label>Marknader</label>
				{this.renderContent()}
			</div>
		);
	};
};


module.exports = class Page extends React.Component {


	constructor(...args) {
		
		super(...args);
	};



	
	render() {

	
		return (
			<Grid>
				<Row>
					<Col md={8} mdPush={2}>
						<Accounts/>
					</Col>
				</Row>
				<Row>
					<Col md={8} mdPush={2}>
						<Instruments/>
					</Col>
				</Row>
				<Row>
					<Col md={8} mdPush={2}>
						<Markets/>
					</Col>
				</Row>
			</Grid>
	
		);
	}

};

