import React from 'react'
import DivisibleInput from '../form/divisible_input.form.js'
import Radios from '../form/radios.form.js'
import RowColXS12 from '../bootstrap/row.col-xs-12.js'

const genderRadioOptions = [
	{name: 'Hombre', value: 'male'},
	{name: 'Mujer', value: 'female'}
]

export default class LoginForm extends React.Component {
	constructor(props){
		super(props);

		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e){
		e.preventDefault();
		console.log(this)
	}

	render(){
		return (
			<div 
				onSubmit={this.onSubmit}
				className="Signup__form_column col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
				<form className="Signup__form">
					<div className="row clearfix">
						<DivisibleInput 
							label="Nombre"
							large/>
						<DivisibleInput 
							label="Email"
							type="email"
							large/>
						<DivisibleInput 
							label="Fecha de Nacimiento"
							type="date"
							large/>
						<DivisibleInput 
							label="Telefono"
							type="text"
							large/>
						<div className="col-xs-12 col-sm-6 col-md-6">
							<Radios name="gender" options={genderRadioOptions} />
						</div>
					</div>
					<p>
						<button 
							name="submit"
							type="submit"
							className="Signup__submit btn-red btn btn-block">
							Aceptar
						</button>
					</p>
				</form>
			</div>
		)
	}
}