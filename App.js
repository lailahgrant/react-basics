import React, { Component } from 'react'

import Table  from './Table'

class App extends Component {

  state = {
    characters: [
      {
        name:'Lailah',
        job: 'Cloud developer'
      },
      {
        name: 'Kato',
        job: 'Doctor'
      },
      {
        name: 'Waswa',
        job: 'Cycber spcialist'
      },
      {
        name: 'Bushra',
        job: 'Intern'
      },
      {
        name: 'uliana',
        job: 'Front-end developer'
      }
    ]
  }

  render() {
   
    return(
       <div className="container">
        <h1>Hello React </h1>
        <Table />
    </div>
    )

  }

}

export default App