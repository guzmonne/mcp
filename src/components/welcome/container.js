import React from 'react'
import RowColXS12 from '../bootstrap/row.col-xs-12.js'
import SocialIcons from '../helpers/social-icons.js'
import Logo from '../helpers/logo.helper.js'

const WelcomeContainer = ({profile}) =>
	<div className="Welcome">
		<RowColXS12 className="text-center">
			<Logo logo="tata" className="Login__logo"/>
		</RowColXS12>

		<RowColXS12>
			<h3>Bienvenido</h3>
			<img 
				src={profile.picture}
				alt={`${profile.name} picture`}
				className="img-circle Welcome__profile-picture"
			/>
			<h4>{profile.name}</h4>
		</RowColXS12>

		<RowColXS12>
			<a href="http://www.tata.com.uy/"className="btn btn-danger">
				Continuar hacia Internet
			</a>
		</RowColXS12>
	</div>

WelcomeContainer.propTypes = {}

export default WelcomeContainer