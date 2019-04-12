import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Vote.css';

class Vote extends Component {
	render() {
		return (
			<div className="vote_container">

				<Link to="/" className="back">
					<i class="fas fa-arrow-left"></i>
				</Link>

				<li className="vote_btn2">vote</li>
			</div>
		);
	}
}

export default Vote;