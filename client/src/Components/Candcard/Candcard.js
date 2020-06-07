import React from 'react';
import './Candcard.css'

const Candcard = ({name, votes, symbol}) => {
	return (
		<div className="candcard">
			<img className="cand_logo" alt="cand-logo" src={symbol}></img>
			<p className="cand_name">{name}</p>
			<p className="cand_count">{votes}</p>
		</div>
	);
}

export default Candcard;