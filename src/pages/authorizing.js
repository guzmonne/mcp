import React from 'react'
import Rx from 'rx-dom'
import RowColXS12 from '../components/bootstrap/row.col-xs-12.js'
import Hypnotize from '../components/helpers/hypnotize.js'
import Loading from '../components/helpers/loading.js'
import Social from '../components/helpers/social_icons.helper.js'

class Authorizing extends React.Component {
	constructor(){
		super()
	}

	componentWillMount(){
		// TODO
	}

	render(){
		const provider = this.props.provider || this.props.location.query.provider

		return (
			<div className="Authorizing">
				<h3 style={{opacity: 0.5}}>Autorizando</h3>
				<Loading>
					<Social icon={provider} type="eclipse" />
				</Loading>
			</div>
		)
	}
}

export default Authorizing