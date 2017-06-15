import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

class Details extends Component {
  componentDidMount () {
    fetch('/view', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      })
      .then(res => res.json())
      .then(data => (this.props.dataStore.allInfo = data))
  }
  render () {
    return (
      <div>
        <pre>
          {JSON.stringify(this.props.dataStore.allInfo, null, 2)}
        </pre>
      </div>
    )
  }
}

export default inject('dataStore')(observer(Details))


// fetch('/view', {
//         method: 'get',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin'
//       })
