import React from 'react'
import SignupForm from '../components/signup/form.signup.js'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import TataLogoContour from '../components/helpers/tata_logo_contour.helper.js'

export default class Signup extends React.Component {
	render(){
		return (
			<div className="Signup">
				<RowColXS12 className="text-center">
					<TataLogoContour className="Signup__logo"/>
				</RowColXS12>

				<RowColXS12>
					<SignupForm />
				</RowColXS12>
			</div>
		)
	}
}