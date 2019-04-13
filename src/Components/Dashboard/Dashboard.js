import React, { Component } from 'react';
import './Dashboard.css';
//import Constcard from '../Constcard/Constcard';
import '../Constcard/Constcard.css';
import Candcard from '../Candcard/Candcard';

class Dashboard extends Component {
	constructor(props){
    	super(props);
    	this.state={
    		adminData: {}
    	}
    }
    componentDidMount(){
		this.requestData();
	}

	requestData = () =>{
		let err=false;
		fetch('https://votenet.premsarswat.me/api/admin')
		.then(response => {
	  		if(response.status!==200)
	    		err=true;
	  		return response.json();
		})
		.then(res => {
	  	if(err)
	    	throw res;
	  	this.setState({adminData: res})
	  	})
		.catch(console.log);
	}
	render() {
		const { adminData } = this.state;
		const CandList = ({ cands }) => {
			const candComponent = cands.map((evt, i) => {
				return <Candcard 
				key={i} 
				name={cands[i].name}
				votes = {cands[i].votes}
				symbol = {cands[i].symbol}
		 		/> 
			});
			return (
				<div>
					{candComponent}
				</div>
			);
		}
		console.log(adminData);
		return (
			<div className="dash_container">
				<div className="dash_head">
					dashboard
				</div>
{
// 				<Constcard con='UJJ05' candidates={adminData['UJJ05']}/> 
// 				<Constcard con='MUM04' candidates={adminData['MUM04']}/> 
// 				<Constcard con='GND02' candidates={adminData['GND02']}/> 
// 				<Constcard con='BKN01' candidates={adminData['BKN01']}/> 
} 
				<div className="constcard">
					<div className="const_head">
						UJJ05
					</div>
					<CandList cands={adminData['UJJ05']} />
				</div>
				<div className="constcard">
					<div className="const_head">
						MUM04
					</div>
					<CandList cands={adminData['MUM04']} />
				</div>
				<div className="constcard">
					<div className="const_head">
						GND02
					</div>
					<CandList cands={adminData['GND02']} />
				</div>
				<div className="constcard">
					<div className="const_head">
						BKN01
					</div>
					<CandList cands={adminData['BKN01']} />
				</div>
			</div>
		);
	}
}

export default Dashboard;