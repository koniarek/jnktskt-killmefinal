import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import Logo2 from './Logo2'
import './Nav.css'

export default class Nav extends Component {
	state = {
		active: false
	};

	handleMenuToggle = () => this.setState({ active: !this.state.active });

	// Only close nav if it is open
	handleLinkClick = () => this.state.active && this.handleMenuToggle();

	render() {
		const { active } = this.state;

		const NavLink = ({ className, children, ...props }) => (
			<Link
				{...props}
				className={`NavLink ${className || ''}`}
				onClick={this.handleLinkClick}
			>
				{children}
			</Link>
		);

		return (
			<nav className={`Nav ${active ? 'Nav-active' : ''}`}>
				<div className="Nav--Container container">
					<Link to="/" onClick={this.handleLinkClick}>
						<Logo />
					</Link>
					<div className="Nav--Links">
						<NavLink to="/" exact>
							News
						</NavLink>
						<NavLink href="https://merchpage.netlify.com" exact>
							Merch
						</NavLink>
						<NavLink href="https://sektapage.netlify.com" exact>
							Jntskt
						</NavLink>
					</div>
					<Logo2 />
				</div>
			</nav>
		)
	}
}
