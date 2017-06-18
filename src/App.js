import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'

import BalagForm from './BalagForm'
import Details from './Details'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='container-fluid'>
          <Router>
            <div>
              <ul>
                <button><Link to='/admin'>ফর্ম</Link></button>
                <button><Link to='/view'>তথ্য</Link></button>
              </ul>

              <hr />

              <Route path='/admin' component={BalagForm} />
              <Route path='/view' component={Details} />
            </div>
          </Router>

        </div>
      </div>
    )
  }
}

export default inject('dataStore')(observer(App))
