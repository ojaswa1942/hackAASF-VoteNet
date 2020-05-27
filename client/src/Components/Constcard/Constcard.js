import React, { Component } from 'react';
import './Constcard.css';
import Candcard from '../Candcard/Candcard';

class Constcard extends Component {
	// constructor(props){
 //    	super(props);
 //    }
    render() {
    	const { con, candidates } = this.props;
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
		return (
			<div className="constcard">
				<div className="const_head">
					{con}
				</div>
				<CandList cands={candidates} />
			</div>
		);
	}
}

export default Constcard;