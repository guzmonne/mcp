import React from 'react'
import DivisibleInput from '../form/divisible_input.form.js'
import Radios from '../form/radios.form.js'

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
				className="Login__form_column col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
				<form className="Login__form">
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
						<div className="row">
							<div className="col-xs-12">
								<Radios name="gender" options={genderRadioOptions} />	
							</div>
						</div>
						<DivisibleInput 
							label="Telefono"
							type="text"
							large/>
					</div>
					<p>
						<button 
							name="submit"
							type="submit"
							className="Login__submit btn-red btn btn-block">
							Aceptar
						</button>
					</p>
				</form>
			</div>
		)
	}
}