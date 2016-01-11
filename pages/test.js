
import React from 'react';  

require('./test.less');



var Row = React.createClass({

	render: function() {

		return (
			<div className="row">
				{this.props.children}
			</div>
		);
	}
	
});


var Cell = React.createClass({


	getDefaultProps: function() {
	
		return {
			type: 'NN'
		};
	},

	onClick: function(event) {
		var x = $(event.target);
		$(document).find('.bp .selected').removeClass('selected');
		x.addClass('selected');
		
	},
	
	render: function() {
		
		return (
			<div className={'cell ' + this.props.type} onClick={this.onClick}>
				{this.props.children}
			</div>
		);
	}
	
});



var Board = React.createClass({


	onKeyDown: function() {
		console.log('keydown');
	},
	
	componentDidMount: function() {
		var board = $(this.refs.board.getDOMNode());

	    console.log('didmount', board);
        board.on('keydown', this.onKeyDown);
    },

    componentWillUnmount: function() {
		var board = $(this.refs.board.getDOMNode());
	    console.log('unmoumt');
        board.off('keydown', this.onKeyDown);
    },

	render: function() {
		
		return (
                <div ref="board" className="board" tabindex="1">
                    <Row>
                    	<Cell type='TL'>N</Cell>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="TW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TW"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="XX"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="TW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TW"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="DW"/>
                        <Cell type="NN"/>
                    </Row>
                    <Row>
                        <Cell type="TL"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TW"/>
                        <Cell type="NN"/>
                        <Cell type="NN"/>
                        <Cell type="TL"/>
                    </Row>
                </div>

		);
		

	}
	
	
});


module.exports = React.createClass({


	render() {
		

		return (
			<div className='bp'>
				<Board>
				</Board>
			</div>

		);
	}

});

