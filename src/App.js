import React, { Component } from 'react'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'

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
