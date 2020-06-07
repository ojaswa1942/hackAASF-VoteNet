import React, { Component } from 'react';
import './OVM.css';
import OVMCard from '../OVMCard/OVMCard'
import Modal from 'react-awesome-modal';
import {Loader} from '../_Loader/Loader'
import {Link} from 'react-router-dom';

class OVM  extends Component {
	constructor(props){
		super(props);
		this.state = {
			voteReq: false,
			voteDone: false
		}
	}
	handleVoteReq = (cid) => {
		this.setState({voteReq: true});
		let error = false;
			fetch('https://votenet.ojaswa.com/api/voted', {
		      method: 'post',
		      headers: {'Content-type': 'application/json'},
		      body: JSON.stringify({
		      	vid: this.props.vid,
		      	cid: cid,
		      	con: this.props.con
		      })
		    })
			.then(res => {
				if(res.status !== 200)
					error=true;
				return res.json();
			})
			.then((data) => {
				if(error)
					throw(data);
				this.setState({
					voteDone: true
				});
			})
			.catch(err => {
				this.setState({error: true, errorMes: err})
			})
	}
	render() {
		const OVMList = ({candidates}) => {
			const list = candidates.map((val, i) => {
				return(
					<OVMCard
						key={i}
						symbol={val.symbol}
						cid={val.cid}
						name={val.name}
						handleVoteReq={this.handleVoteReq}
					/>);
			})
			return(list);
		}
		return(
			<div>
				<Modal 
				  visible={this.state.voteReq}
				  effect="fadeInDown"
				  onClickAway={() => {}}
				>
				{(!this.state.voteDone)?
					<div className='black f5 flex flex-column items-center pa3 bg-near-gray'>
					  <div className='mb2'>Please wait</div><div className='t mh2'><Loader /></div>
					</div>
					:
					<div className='black f5 flex flex-column items-center pa3 bg-near-gray'>
					  <div className='mb2'>You have casted your vote successfully!</div><div className='t mh2 black'><Link to='/' className='underline black'>Return to homepage.</Link></div>
					</div>
				}
				</Modal>
				<div className="OVM-container">
					<div className="OVM-head">OVM (Please Choose!!)</div>
					<OVMList candidates={this.props.candidates} />
				</div>
			</div>
		);
	}
}

export default OVM;