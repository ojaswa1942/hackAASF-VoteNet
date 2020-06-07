import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Vote.css';
import {Loader} from '../_Loader/Loader'
import Form from '../Form/Form'
import OVM from '../OVM/OVM'

class Vote extends Component {
	constructor(){
		super();
		this.state = {
			isLoading1: true,
			isLoading2: true,
			isLoading3: false,
			requestedFace: false,
			dataVerified: false,
			errorMes: '',
			error: false,
			vid: '',
			userData: {
				name: '',
				father: '',
				dob: '',
				sex: '',
				address: '',
				con: ''
			},
			candidates: []
		}
	}

	updateUserData = (data) =>{
		this.setState({
			userData: {				
				name: data.name,
				father: data.father,
				dob: data.dob,
				sex: data.sex,
				address: data.address,
				con: data.con
			}
		});
	}

	updateVID = (data) =>{
		this.setState({
			vid: data
		})
	}

	requestFace = () =>{
		this.setState({requestedFace: true});
		fetch('http://localhost:5001/')
		.then(res => res.json())
		.then(data => {
			console.log(data);
			this.setState({isLoading1: false});
			this.updateVID(data);
		  	let error = false;
			fetch('https://votenet.ojaswa.com/api/vote', {
		      method: 'post',
		      headers: {'Content-type': 'application/json'},
		      body: JSON.stringify({
		      	vid: this.state.vid
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
				this.updateUserData(data.userData);
				this.setState({
					candidates: data.cans,
					isLoading2: false
				});
			})
			.catch(err => {
				this.setState({error: true, errorMes: err.toString()})
			})
		})
		.catch(err => {
			this.setState({error: true, errorMes: err.toString()})
		})
	}

	render() {
		console.log(this.state.candidates);
		return (
			<div className="vote_container">
				<Link to="/" className="back">
					<i className="fas fa-arrow-left"></i>
				</Link>
				{
					(!this.state.requestedFace)?
						<li onClick={this.requestFace} className="vote_btn2 pointer dim">vote</li>
					:
						(this.state.isLoading2)?
							<div className='loaderClass'>
								<Loader />
								Please wait while we load
							</div>
						:
							(this.state.dataVerified)?
								<OVM candidates={this.state.candidates} vid={this.state.vid} con={this.state.userData.con} />
							:
								<div className="form_container">
									<div className="form-data">
										<p className="form-head">Verify Your Details !!</p>
										<div className="details">
											<p className="dt dt-vid">{this.state.vid}</p>
											<p className="dt dt-name">{this.state.userData.name}</p>
											<p className="dt dt-fname">{this.state.userData.father}</p>
											<p className="dt dt-dob">{this.state.userData.dob}</p>
											<p className="dt dt-sex">{this.state.userData.sex}</p>
											<p className="dt dt-add">{this.state.userData.address}</p>
											<p className="dt dt-con">{this.state.userData.con}</p>
										</div>
									</div>
									<div className="vf-btn pointer dim" onClick={() => {this.setState({dataVerified: true})}} >PROCEED</div>
								</div>
				}
				{(this.state.error)?
					<div className='errorMes loaderClass red b '>
						{this.state.errorMes}
					</div>
					: null
				}
			</div>
		);
	}
}

export default Vote;