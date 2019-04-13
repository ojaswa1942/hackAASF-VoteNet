import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Vote.css';
import {Loader} from '../_Loader/Loader'

class Vote extends Component {
	constructor(){
		super();
		this.state = {
			isLoading1: false,
			isLoading2: false,
			requestedFace: false,
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
			}
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
		this.setState({isLoading1: true, requestedFace: true});
		fetch('http://localhost:5001/')
		.then(res => res.json())
		.then(data => {
			this.setState({isLoading1: false, isLoading2: true});
			this.updateVID(data);
			
		})
		.catch(err => {
			this.setState({error: true, errorMes: err})
		})
	}

	render() {
		return (
			<div className="vote_container">
				<Link to="/" className="back">
					<i className="fas fa-arrow-left"></i>
				</Link>
				{(!this.state.requestedFace)?
					<li onClick={this.requestFace} className="vote_btn2 pointer dim">vote</li>
					:
					(!this.state.isLoading2)?
						<div />
						:
						<div className='loaderClass'>
							<Loader />
							Please wait while we load
						</div>
				}
				{(this.state.error)?
					<div className='errorMes '>
						{this.state.errorMes}
					</div>
					: null
				}
			</div>
		);
	}
}

export default Vote;