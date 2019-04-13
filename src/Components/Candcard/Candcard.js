import React, { Component } from 'react';
import './Candcard.css'
import logo from '../../assets/logo.png'

class Candcard extends Component {
	render() {
		return (
			<div className="candcard">

				<img class="cand_logo" alt="cand-logo" src={logo}></img>

				<p className="cand_name">Manish Mavi</p>

				<p className="cand_count">60</p>

			</div>
		);
	}
}

export default Candcard;