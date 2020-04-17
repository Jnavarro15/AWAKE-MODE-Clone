import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
      <div>
        <div className="tiers tier-1">
          <a href="#">
            <img className='imgs' src="https://awake-mode.com/files/2020/04/resort20-1-1.jpg" alt="" />
          </a>
        </div>
        <div className="tiers">
          <a href="#">
            <img className='imgs' src="https://awake-mode.com/files/2020/04/resort20-2.jpg" alt="" />
          </a>
        </div>
        <div className="tiers">
          <a href="#">
            <img className='imgs' src="https://awake-mode.com/files/2020/04/resrt20-3.jpg" alt="" />
          </a>
        </div>
      </div>
    )
  }
}


export default Content
