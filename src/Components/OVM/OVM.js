import React, { Component } from 'react';
import './OVM.css';
import OVMCard from '../OVMCard/OVMCard'

class OVM  extends Component {
	render() {
		return(
			<div className="OVM-container">
				<div className="OVM-head">OVM (Please Choose!!)</div>

				<OVMCard />
				<OVMCard />
				<OVMCard />
				<OVMCard />
				<OVMCard />
				<OVMCard />

			</div>
		);
	}
}

export default OVM;