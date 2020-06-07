import React, { Component } from 'react';
import './Dashboard.css';
//import Constcard from '../Constcard/Constcard';
import '../Constcard/Constcard.css';
import Candcard from '../Candcard/Candcard.css';

class Dashboard extends Component {
	constructor(props){
    	super(props);
    	this.state={
    		adminData: {
    			UJJ05: [
    				{},
    				{},
    				{},
    				{},
    				{},
    				{}
    			],
    			MUM04: [
    				{},
    				{},
    				{},
    				{},
    				{},
    				{}
    			],
    			GND02: [
    				{},
    				{},
    				{},
    				{},
    				{},
    				{}
    			],
    			BKN01: [
    				{},
    				{},
    				{},
    				{},
    				{},
    				{}
    			]
    		}
    	}
    }
    componentWillMount(){
		this.requestData();
	}

	requestData = () =>{
		let err=false;
		fetch('https://votenet.ojaswa.com/api/admin')
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
				<div className="constcard">
					<div className="const_head">
						UJJ05
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['UJJ05'][0].symbol}></img>
						<p className="cand_name">{adminData['UJJ05'][0].name}</p>
						<p className="cand_count">{adminData['UJJ05'][0].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['UJJ05'][1].symbol}></img>
						<p className="cand_name">{adminData['UJJ05'][1].name}</p>
						<p className="cand_count">{adminData['UJJ05'][1].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['UJJ05'][2].symbol}></img>
						<p className="cand_name">{adminData['UJJ05'][2].name}</p>
						<p className="cand_count">{adminData['UJJ05'][2].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['UJJ05'][3].symbol}></img>
						<p className="cand_name">{adminData['UJJ05'][3].name}</p>
						<p className="cand_count">{adminData['UJJ05'][3].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['UJJ05'][4].symbol}></img>
						<p className="cand_name">{adminData['UJJ05'][4].name}</p>
						<p className="cand_count">{adminData['UJJ05'][4].votes}</p>
					</div>
				</div>
				<div className="constcard">
					<div className="const_head">
						MUM04
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['MUM04'][0].symbol}></img>
						<p className="cand_name">{adminData['MUM04'][0].name}</p>
						<p className="cand_count">{adminData['MUM04'][0].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['MUM04'][1].symbol}></img>
						<p className="cand_name">{adminData['MUM04'][1].name}</p>
						<p className="cand_count">{adminData['MUM04'][1].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['MUM04'][2].symbol}></img>
						<p className="cand_name">{adminData['MUM04'][2].name}</p>
						<p className="cand_count">{adminData['MUM04'][2].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['MUM04'][3].symbol}></img>
						<p className="cand_name">{adminData['MUM04'][3].name}</p>
						<p className="cand_count">{adminData['MUM04'][3].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['MUM04'][4].symbol}></img>
						<p className="cand_name">{adminData['MUM04'][4].name}</p>
						<p className="cand_count">{adminData['MUM04'][4].votes}</p>
					</div>
				</div>
				<div className="constcard">
					<div className="const_head">
						GND02
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['GND02'][0].symbol}></img>
						<p className="cand_name">{adminData['GND02'][0].name}</p>
						<p className="cand_count">{adminData['GND02'][0].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['GND02'][1].symbol}></img>
						<p className="cand_name">{adminData['GND02'][1].name}</p>
						<p className="cand_count">{adminData['GND02'][1].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['GND02'][2].symbol}></img>
						<p className="cand_name">{adminData['GND02'][2].name}</p>
						<p className="cand_count">{adminData['GND02'][2].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['GND02'][3].symbol}></img>
						<p className="cand_name">{adminData['GND02'][3].name}</p>
						<p className="cand_count">{adminData['GND02'][3].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['GND02'][4].symbol}></img>
						<p className="cand_name">{adminData['GND02'][4].name}</p>
						<p className="cand_count">{adminData['GND02'][4].votes}</p>
					</div>
				</div>
				<div className="constcard">
					<div className="const_head">
						BKN01
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['BKN01'][0].symbol}></img>
						<p className="cand_name">{adminData['BKN01'][0].name}</p>
						<p className="cand_count">{adminData['BKN01'][0].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['BKN01'][1].symbol}></img>
						<p className="cand_name">{adminData['BKN01'][1].name}</p>
						<p className="cand_count">{adminData['BKN01'][1].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['BKN01'][2].symbol}></img>
						<p className="cand_name">{adminData['BKN01'][2].name}</p>
						<p className="cand_count">{adminData['BKN01'][2].votes}</p>
					</div>
					<div className="candcard">
						<img className="cand_logo" alt="cand-logo" src={adminData['BKN01'][3].symbol}></img>
						<p className="cand_name">{adminData['BKN01'][3].name}</p>
						<p className="cand_count">{adminData['BKN01'][3].votes}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;