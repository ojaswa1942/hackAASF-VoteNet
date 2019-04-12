import React, { Component } from 'react';
import Parallax from 'react-rellax'
import './Homepage.css';
import Logo from '../../assets/VoteNetLogo.png'
import BalletBox from '../../assets/ballet.png'
import Vote from '../../assets/Vote.png'
import Net from '../../assets/Net.png'
import triangle from '../../assets/4.png'
import About from '../../assets/about.png'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'

class HomePage extends Component {
  render() {
    return (
    <div>
      	<div className="homepage">
			<nav className="navbar">
				<div>
					<img alt="logo" className="logo" src={Logo}/>
				</div>

				<div className="nav_buttons">
					<a href="#"><li>Home</li></a>
					<a href="#"><li>About</li></a>
					<a href="#"><li className="vote_btn">Vote</li></a>
				</div>
			</nav>

			<Parallax className="ballet1" speed={10}>
				<img alt="balletBox" src={BalletBox}></img>
			</Parallax>

			<Parallax className="ballet2"  speed={15}>
				<img alt="balletBox" src={BalletBox}></img>
			</Parallax>

			<Parallax className="vote"  speed={10}>
				<img alt="Vote-img" src={Vote}/>
			</Parallax>

			<Parallax className="net" speed={15}>
				<img alt="Net-img" src={Net}/>
			</Parallax>

			<Parallax className="t1" speed={15}>
				<img alt="triangle" src={triangle}/>
			</Parallax>

			<p className="head1">We</p>
			<p className="head2">Power Democracy</p>

		</div>

		<div className="about_container">

			<Parallax className="about_head" speed={5}>
				<img data-rellax-speed="5" alt="about" src={About}></img>
			</Parallax>

			<Parallax className="content" speed={5}>
				<p data-rellax-speed="5">Leading the transformation of the elections industry by making
					voting more accessible, efficient, transparent, auditable and secure.
				</p>	
			</Parallax>

			<div className="cards">
				<Parallax className="card1" speed={5}><img data-rellax-speed="5" alt="About-Card" src={Card1}></img></Parallax>
				<Parallax className="card2" speed={5}><img data-rellax-speed="5" alt="About-Card" src={Card2}></img></Parallax>
				<Parallax className="card3" speed={5}><img data-rellax-speed="5" alt="About-Card" src={Card3}></img></Parallax>
			</div>

		</div>

		<div className="social">
			<i className="fab fa-facebook"></i>
			<i className="fab fa-twitter"></i>
			<i className="fab fa-instagram"></i>
		</div>
	</div>
    );
  }
}

export default HomePage;
