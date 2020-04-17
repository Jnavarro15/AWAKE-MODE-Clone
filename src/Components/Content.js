import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
      <div>
        <a href='/' className='offer'>Sign up for special offer</a>
        <div className="tiers tier-1">
          <a href="https://awake-mode.com/product-category/women/new-in-women/">
            <img className='imgs' src="https://awake-mode.com/files/2020/04/res20-1.jpg" alt="" />
          </a>
        </div>
        <div className="tiers">
          <a href="https://awake-mode.com/product-category/women/new-in-women/">
            <img className='imgs' src="https://awake-mode.com/files/2020/04/res20-2.jpg" alt="" />
          </a>
        </div>
        <div className="tiers">
          <a href="https://awake-mode.com/product-category/women/new-in-women/">
            <img className='imgs' src="https://awake-mode.com/files/2020/04/res20-3.jpg" alt="" />
          </a>
        </div>
      </div>
    )
  }
}


export default Content
