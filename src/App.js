import React, { Component } from 'react'
import Nav from './Components/Nav'
import Content from './Components/Content'
import Footer from './Components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Footer />
      </div>
    )
  }
}
