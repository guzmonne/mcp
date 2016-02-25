import React from 'react'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'

export default class Poll extends React.Component {
	render(){
		return (
		<div className="Poll">

			<h1>
				<strong>
					¿Que prefiere?
				</strong>
			</h1>
			<br/>

			<RowColXS12>
				<a href="#" className="Poll__cap">
					<img className="img-responsive" src="./images/pepsi_cap.png" alt="Pepspi Cap"/>
				</a>
			</RowColXS12>

			<hr/>

			<RowColXS12>
				<a href="#" className="Poll__cap">
					<img className="img-responsive" src="./images/coca_cola_cap.png" alt="Pepspi Cap"/>
				</a>
			</RowColXS12>

			<small>Elija una de las opciones para continuar hacia Internet</small>
		</div>
		)
	}
}