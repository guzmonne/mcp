import React from 'react'

const logos = {
	tata: './images/tata_logo_fill.png',
	mvd: './images/logo-montevideo-shopping.png '
}

const logo = ({className, logo}) =>
	<img
		className={className + " " + "img-responsive"}
		src={logos[logo]} alt="Logo" />

logo.propTypes = {
	logo: React.PropTypes.oneOf(Object.keys(logos))
}

export default logo