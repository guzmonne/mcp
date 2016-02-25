import React from 'react'
import {Link} from 'react-router'
import Container from '../components/helpers/container.helper.js'
import SplashHeroUnit from '../components/splash/hero_unit.splash.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import TataLogoContour from '../components/helpers/tata_logo_contour.helper.js'
import TataLogoFill from '../components/helpers/tata_logo_fill.helper.js'

export default class Splash extends React.Component {
	render(){
		return (
			<Container className="Splash">
				<RowColXS12>
					<TataLogoContour className="Splash__logo"/>
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
					<Link to="login" className="btn btn-red Splash__button">
						Iniciar Sesión
					</Link>
					<Link to="signup" className="btn btn-red Splash__button">
						Crear Cuenta
					</Link>
					<Link to="poll" className="btn btn-red Splash__button">
						Encuesta
					</Link>
				</div>

			</Container>
		)
	}
} 

