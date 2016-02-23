import React from 'react'

export default class SplashForm extends React.Component {
	render(){
		return (
			<div className="Splash__form_column col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
				<form className="Splash__form">
					<div className="row clearfix">
						<div className="col-xs-12 col-sm-6 col-md-6">
							<div className="form-group">
								<label className="control-label">Nombre</label>
								<div className="controls">
									<input type="text" placeholder="Nombre" className="form-control input-lg"/>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6">
							<div className="form-group">
								<label className="control-label">Email</label>
								<div className="controls">
									<input type="email" placeholder="Email" className="form-control input-lg"/>
								</div>
							</div>
						</div>
					</div>
					<p>
						<button name="submit" type="submit" className="Splash__submit btn btn-block">
							Aceptar
						</button>
					</p>
				</form>
			</div>
		)
	}
}