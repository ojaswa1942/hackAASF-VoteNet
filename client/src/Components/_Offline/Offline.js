import React, { Component } from 'react';
import './Offline.css';

class Offline extends Component {
	offlineListen = () =>{
		var offNotif = document.getElementsByClassName('offline')[0];
		var closeNotif = document.getElementsByClassName('close-notif')[0];
		window.addEventListener('offline', function(e) { 
			offNotif.classList.add('show-notif');
		});

		window.addEventListener('online', function(e) { 
			offNotif.classList.remove('show-notif');
		});

		closeNotif.addEventListener("click", function(){
		    offNotif.classList.remove('show-notif');
		});
	}
	componentDidMount(){
		this.offlineListen();
	}
	render() {
		return(
		  	<div className="offline">
		  		<span className="fas fa-exclamation-circle"></span>
				<span>&nbsp; You are offline! Voting is not available. Check your internet connection</span>
				<span className="close-notif fas fa-times"></span>
			</div>
		);
	}
}
export default Offline;