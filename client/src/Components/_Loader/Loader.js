import React from 'react';
import './Loader.css';

export const Loader = () =>{
	return(
	  	<div className="spinner_on_verification">
			<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle className="length" fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
			</svg>
			<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
			</svg>
			<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
			</svg>
			<svg className='ver_load_svg' viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
				<circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
			</svg>
		</div>
	);
}