import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	render() {
		return(
			<div className="form_container">

				<div className="form-data">
					<p className="form-head">Verify Your Details !!</p>

					<div className="details">
						<p className="dt dt-vid">MAVI19995</p>
						<p className="dt dt-name">Manish Mavi</p>
						<p className="dt dt-fname">Narendra Singh</p>
						<p className="dt dt-dob">12-05-1998</p>
						<p className="dt dt-sex">Male</p>
						<p className="dt dt-add">J-58, Gamma-2, Greater Noida</p>
						<p className="dt dt-con">Dadri</p>
					</div>
				</div>

				<div className="vf-btn">PROCEED</div>

			</div>
		);
	}
}

export default Form;