import React, { Component } from 'react';
import './Constcard.css';
import Candcard from '../Candcard/Candcard';

class Constcard extends Component {
	render() {
		return (
			<div className="constcard">
				<div className="const_head">
					Name Of Constituency
				</div>

				<Candcard />
				<Candcard />
				<Candcard />



			</div>
		);
	}
}

export default Constcard;