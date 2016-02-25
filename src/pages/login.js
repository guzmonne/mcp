import React from 'react'
import LoginForm from '../components/login/form.login.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import TataLogoContour from '../components/helpers/tata_logo_contour.helper.js'
import Social from '../components/helpers/social_icons.helper.js'

export default class Login extends React.Component {
	render(){
		return (
			<div className="Login">
				<RowColXS12 className="text-center">
					<TataLogoContour className="Login__logo"/>
				</RowColXS12>

				<RowColXS12 className="Login__social">
					<p>Inicie su sesión con su red social preferida</p>
					<a href="#" className="Login__social_icon">
						<Social icon="facebook" type="eclipse" />
					</a>
					<a href="#" className="Login__social_icon">
						<Social icon="twitter" type="eclipse" />
					</a>
					<a href="#" className="Login__social_icon">
						<Social icon="google" type="eclipse" />
					</a>
					<a href="#" className="Login__social_icon">
						<Social icon="linkedin" type="eclipse" />
					</a>
				</RowColXS12>

				<RowColXS12>
					<p>... o ingrese sus datos</p>
					<LoginForm />
				</RowColXS12>
			</div>
		)
	}
}