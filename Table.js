import React, { Component } from 'react'

class Table extends Component {
  render(){
    return(
      <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>

      <tbody>
      <tr>
      <td>Lailah </td>
      <td>Cloud developer</td>
      </tr>
      <tr>
      <td>Kato </td>
      <td>Doctor</td>
      </tr>
      <tr>
      <td>Waswa </td>
      <td>Cycber spcialist</td>
      </tr>
      <tr>
      <td>Bushra </td>
      <td>Intern</td>
      </tr>
      <tr>
      <td>Juliana </td>
      <td>Front-end developer</td>
      </tr>
      </tbody>

      </table>
    )
  }
}

export default Table