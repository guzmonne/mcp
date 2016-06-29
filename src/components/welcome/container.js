import React from 'react'
import RowColXS12 from '../bootstrap/row.col-xs-12.js'
import SocialIcons from '../helpers/social-icons.js'
import Logo from '../helpers/logo.helper.js'

const WelcomeContainer = () =>
	<div className="Welcome">
		<RowColXS12 className="text-center">
			<Logo logo="tata" className="Login__logo"/>
		</RowColXS12>

		<RowColXS12 className="Login__social">
			<h3>Bienvenido</h3>
		</RowColXS12>

		<RowColXS12>
			<a href="http://www.tata.com.uy/"className="btn btn-danger">
				Continuar hacia Internet
			</a>
		</RowColXS12>
	</div>

WelcomeContainer.propTypes = {}

export default WelcomeContainer