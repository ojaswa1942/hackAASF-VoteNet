import React, { Component } from 'react';
import './OVMCard.css';
import logo from '../../assets/logo.png';
import btn from '../../assets/btn.png'


class OVMCard  extends Component {
	constructor(props){
		super(props);

	}
	render() {
		return(
			<div value={this.props.cid} onClick={() => {this.props.handleVoteReq(this.props.cid)}} className="OVMC-container pointer dim">
				<img class="party_logo" alt="party-logo" src={this.props.symbol}></img>
				<p className="party_name">{this.props.name}</p>
			</div>
		);
	}
}

export default OVMCard;