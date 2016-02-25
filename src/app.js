require('../node_modules/font-awesome/css/font-awesome.css');
require('./styles/main.scss');

import MainApp from './main.app.js'
import React from 'react'
import {render} from 'react-dom'

render(<MainApp/>, document.getElementById('root'))