import React from 'react'
import Container from '../components/helpers/container.helper.js'
import LoginForm from '../components/login/form.login.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import TataLogoContour from '../components/helpers/tata_logo_contour.helper.js'

export default class Login extends React.Component {
	render(){
		return (
			<Container className="Login">
				<RowColXS12>
					<TataLogoContour className="Login__logo"/>
				</RowColXS12>

				<RowColXS12>
					<LoginForm />
				</RowColXS12>
			</Container>
		)
	}
}