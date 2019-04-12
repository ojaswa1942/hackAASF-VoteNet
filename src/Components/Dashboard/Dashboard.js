import React, { Component } from 'react';
import './Dashboard.css';
import Constcard from '../Constcard/Constcard';

class Dashboard extends Component {
	render() {
		return (
			<div className="dash_container">
				<div className="dash_head">
					dashboard
				</div>

				<Constcard /> 
				<Constcard /> 
				<Constcard /> 
				<Constcard /> 
				<Constcard />
				<Constcard /> 


			</div>
		);
	}
}

export default Dashboard;