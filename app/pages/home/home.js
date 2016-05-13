import React from 'react';
import {Jumbotron, Button, Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import {extend, sprintf, isString, isObject, isArray} from '../../scripts/toolbox.js';
import nordnet from '../../scripts/nordnet.js';
import Gopher from '../../scripts/gopher.js';

class Blaffa extends React.Component {
	
	constructor(...args) {
		super(...args);

	}

	componentDidMount() {
	};

	renderContent() {
		
	}
	
	
	render() {
		
		var style = {};
		var labelStyle = {};
		var textStyle = {};
		
		style.position = 'relative';
		style.display = 'table';
		style.borderCollapse = 'collapse';
		style.width = '100%';
		style.height = '100%';
		
		style.border = '1px solid rgba(0,0,0,0.025)';
		style.padding = '0.3em';
				
		labelStyle.position   = 'absolute';
		labelStyle.left       = 0;
		labelStyle.top        = 0;
		labelStyle.lineHeight = 0;
		labelStyle.paddingTop = '1em';
		labelStyle.paddingLeft = '0.5em';
		//labelStyle.marginTop  = '1em';
		labelStyle.fontSize   = '75%';
		
		
		//textStyle.position = 'absolute';
		textStyle.display = 'table-cell';
		textStyle.textAlign = 'right';
		textStyle.paddingRight = '0.5em';
		textStyle.verticalAlign = 'middle';
		textStyle.fontSize   = '120%';
		textStyle.marginTop = '1em';




		return (
				<div style={style}>
					<div style={labelStyle}>
						{this.props.label}
					</div>
					<div style={textStyle}>
						{this.props.text}
					</div>
				</div>
		);
	};
};




/*
	
https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%3D'PHI.ST'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
q

*/


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


		var gopher = new Gopher('https://query.yahooapis.com/v1/public');
		var self = this;
		
		var params = {};
		params.q        = 'SELECT * FROM yahoo.finance.quote WHERE symbol="PHI.ST"';
		params.format   = 'json';
		params.env      = 'store://datatables.org/alltableswithkeys';
		params.callback = '';
				
		var request = gopher.request('get', 'yql', params);

		request.then(function(result) {
			console.log(result.results);
		});
		
	};

	renderContent() {

		if (this.state.accounts == null)
			return <div>Loading...</div>;

		var items = [];
		
		this.state.accounts.forEach(function(item, index) {
			items.push(
				<ListGroupItem header={item.accno} key={index}>
					<div style={{display:'table', tableLayout:'fixed', width:'100%', lineHeight:'250%'}}>
						<div style={{display:'table-cell'}}>
							<Blaffa label='Antal' text='334'/>
						</div>
						<div style={{display:'table-cell'}}>
							<Blaffa label='Antal' text='334'/>
						</div>
						<div style={{display:'table-cell'}}>
							<Blaffa label='Antal' text='334'/>
						</div>
					</div>
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
					<div style={{display:'table', tableLayout:'fixed', width:'100%', lineHeight:'250%'}}>
						<div style={{display:'table-cell'}}>
							<Blaffa label='ID' text={item.instrument_id}/>
						</div>
						<div style={{display:'table-cell'}}>
							<Blaffa label='Ticker' text={item.symbol}/>
						</div>
						<div style={{display:'table-cell'}}>
							<Blaffa label='Typ' text={item.instrument_type}/>
						</div>
						<div style={{display:'table-cell'}}>
							<Blaffa label='Valuta' text={item.currency}/>
						</div>
					</div>
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
/*
		return (
			<Grid>
				<Row>
					<Col md={8} mdPush={2}>
						<Blaffa label='HEJ' text='MEG'/>
					</Col>
				</Row>
			</Grid>
	
		);
*/	
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

