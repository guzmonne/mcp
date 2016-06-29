import React from 'react'
import {browserHistory} from 'react-router'
import LoginForm from '../components/login/form.login.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import Logo from '../components/helpers/logo.helper.js'
import SocialIcons from '../components/helpers/social-icons.js'
import LocalStorage from '../modules/local-storage.js'

export default class Login extends React.Component {
	componentWillMount(){
		const token    = LocalStorage.getKey('token')
		const provider = LocalStorage.getKey('provider')
		if (!!token && !!provider) { // token is saved
			console.log('Token found')
			browserHistory.push(`/welcome?provider=${provider}&token=${token}`)
		}
	}

	render(){
		return (
			<div className="Login">
				<RowColXS12 className="text-center">
					<Logo logo={this.props.location.query.client || "tata"} className="Login__logo"/>
				</RowColXS12>

				<RowColXS12 className="Login__social">
					<p>Inicie su sesión con su red social preferida</p>
					<SocialIcons />
				</RowColXS12>

				<RowColXS12>
					<p>... o ingrese sus datos</p>
					<LoginForm />
				</RowColXS12>
			</div>
		)
	}
}
