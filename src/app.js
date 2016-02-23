require('./styles/css/bootstrap.flatly.css');
require('./styles/main.scss');

import MainApp from './main.app.js'
import React from 'react'
import {render} from 'react-dom'

render(<MainApp/>, document.getElementById('root'))