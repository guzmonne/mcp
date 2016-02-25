import React from 'react'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'

export default class Advertisment extends React.Component {
	render(){
		return (
			<div className="Advertisment">

				<RowColXS12>
					<img src="../images/publicidad.jpg" alt="Publicidad 1" className="img-responsive"/>
				</RowColXS12>

				<RowColXS12 className="Advertisment__continue">

					<button className="btn btn-red">
						Continuar hacia Internet
					</button>

				</RowColXS12>

			</div>
		)
	}
}