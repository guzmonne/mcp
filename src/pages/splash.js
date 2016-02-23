import React from 'react'
import {Link} from 'react-router'
import SplashContainer from '../components/splash/container.splash.js'
import SplashHeroUnit from '../components/splash/hero_unit.splash.js'
import SplashForm from '../components/splash/form.splash.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'

export default class Splash extends React.Component {
	render(){
		return (
			<SplashContainer>
				<RowColXS12>
					<img className="Splash__logo img-responsive" src="./images/tata_logo_contour.png" alt="Tata Logo Contour"/>
				</RowColXS12>
				
				<RowColXS12>
					<div className="Splash__hero_unit">

						<h1 className="Splash__title">
							Bienvenido a<br/><b>TaTa WiFi</b>
						</h1>

						<h5>Ingese sus datos para acceder a la Red.</h5>
					</div>
				</RowColXS12>

				<div className="row Splash__buttons">
					<Link to="login" className="btn Splash__button">
						Iniciar Sesión
					</Link>
					<Link to="signup" className="btn Splash__button">
						Crear Cuenta
					</Link>
				</div>

			</SplashContainer>
		)
	}
} 

