import React from 'react'
import {Link} from 'react-router'
import SplashHeroUnit from '../components/splash/hero_unit.splash.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import TataLogoContour from '../components/helpers/tata_logo_contour.helper.js'
import Logo from '../components/helpers/logo.helper.js'
import TataLogoFill from '../components/helpers/tata_logo_fill.helper.js'

export default class Splash extends React.Component {
	render(){
		return (
			<div className="Splash">
				<RowColXS12>
					<Logo logo={this.props.location.query.client || "mvd"} className="Splash__logo"/>
				</RowColXS12>
				
				<RowColXS12>
					<div className="Splash__hero_unit">

						<h1 className="Splash__title">
							Bienvenido a
							<br/>
							<b>
								{(this.props.location.query.client || "Mvd").toUpperCase()}
								{' '}
								WiFi
							</b>
						</h1>

						<h5>Ingese sus datos para acceder a la Red.</h5>
					</div>
				</RowColXS12>

				<div className="row Splash__buttons">
					<Link query={({client: this.props.location.query.client || 'mvd'})}to="login" className="btn btn-red Splash__button">
						Iniciar Sesión
					</Link>
					<Link query={({client: this.props.location.query.client || 'mvd'})}to="signup" className="btn btn-red Splash__button">
						Crear Cuenta
					</Link>
					<Link query={({client: this.props.location.query.client || 'mvd'})}to="poll" className="btn btn-red Splash__button">
						Encuesta
					</Link>
					<Link query={({client: this.props.location.query.client || 'mvd'})}to="advertisment" className="btn btn-red Splash__button">
						Aviso
					</Link>
				</div>

			</div>
		)
	}
} 

