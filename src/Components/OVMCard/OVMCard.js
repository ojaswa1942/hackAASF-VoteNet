import React, { Component } from 'react';
import './OVMCard.css';
import logo from '../../assets/logo.png';
import btn from '../../assets/btn.png'


class OVMCard  extends Component {
	render() {
		return(
			<div className="OVMC-container">
				
				<img class="party_logo" alt="party-logo" src={logo}></img>

				<p className="party_name">Manish Mavi</p>

				<img className="OVM-btn" alt="OVM-btn" src={btn}></img>

			</div>
		);
	}
}

export default OVMCard;