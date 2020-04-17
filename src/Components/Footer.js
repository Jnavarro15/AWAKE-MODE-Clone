import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'

export class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      emailSucess: '',
    }

    this.emailBox = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const emailBox = this.emailBox.current.value;
    e.preventDefault();
    if (!emailBox.includes('@')) {
      this.setState({
        emailError: 'Please enter a valid email address',
        email: ''
      });
    } else {
      this.setState({
        email: 'undefined',
        emailError: '',
        emailSucess: 'Thank You for Subscribing! :)'
      })
    }
    console.log(emailBox)
  }

  render() {
    const { email } = this.state.email;
    return (
      <div>
        <footer className='footer'>
          <div className="copyright">
            <div>
              <label htmlFor="email"><h3>Newsletter Signup</h3></label>
            </div>
            <form onSubmit={this.handleClick} className='form-container'>
              <input name='email' ref={this.emailBox} className='email' type="text" value={email} required />
              <button type='submit' className='icon-box'>
                <i className='icon'>
                  <FaArrowRight />
                </i>
              </button>
            </form>
            {this.state.emailError ? (
              <div style={{ fontSize: '10px', marginTop: '-1rem', marginBottom: '1rem' }}>
                {this.state.emailError}
              </div>
            ) : null}
            {this.state.emailSucess ? (
              <div style={{ color: 'green', fontSize: '12px', marginTop: '-1rem', marginBottom: '1rem' }}>
                {this.state.emailSucess}
              </div>
            ) : null}
            <div>
              <span className='rights'>
                © 2020 A.W.A.K.E MODE. All Rights Reserved.
              </span>
            </div>
          </div>
          <FooterMenu />
        </footer>

      </div>
    )
  }
}

const FooterMenu = () => (
  <div className="footer-menu">
    <li className='footer-1'>
      <div>
        <ul>
          <li> <a href="https://awake-mode.com/sizing-chart/">Sizing Chart</a></li>
          <li><a href="https://awake-mode.com/delivery_and_returns/">Delivery &amp; Returns</a></li>
          <li><a href="https://awake-mode.com/contact/">Contact us</a></li>
        </ul>
      </div>
    </li>
    <li className='footer-2'>
      <div>
        <ul>
          <li><a href="https://awake-mode.com/terms-conditions/">Terms &amp; Conditions</a></li>
          <li><a href="https://awake-mode.com/privacy-policy/">Privacy Policy</a></li>
        </ul>
      </div>
    </li>
    <li className='footer-3'>
      <div>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/awake_mode">Instagram</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/awakebrand/">Facebook</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/a-w-a-k-e-mode/">Linkedin</a></li>
        </ul>
      </div>
    </li>
  </div>
)

export default Footer
