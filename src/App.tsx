import React from 'react';
import {Side, SideImg, Button, Input, Checkbox, Link, Strike, StrikeContent, LogoBox, LogoIcon} from './loginItemStyled'
import './App.css';
const sideImg = require('./assets/img/side-img.png')
const Google = require('./assets/img/gg-logo.png')
const Facebook = require('./assets/img/fb-logo.png')
const Ig = require('./assets/img/ig-logo.png')
const Twitter = require('./assets/img/tw-logo.png')

const themeColor = '#7754F6';
const Logos = [Google, Facebook, Ig, Twitter]

function App() {
  return (
    <div className="App">
      <div className="container flex">
        {/* LOGIN PAGE */}
        <Side className="side-img">
          <SideImg src={sideImg} />
        </Side>
        <Side className="side-content">
          <div className="form">
            <h1 className='heading'>Login</h1>
            <p>Login your account in a second</p>
            <Input type="text" placeholder='Email Address'/>
            <Input type="text" placeholder='Password'/>
            <div className="remember flex">
              <div className="keep">
                <Checkbox type="checkbox" color={themeColor}/> Keep me logged in
              </div>
              <Link href="" color={themeColor}>Forget password</Link>
            </div>
            <Button backgroundColor={themeColor}>Login</Button>
            <p className='signUp-line'>Don't have an account? <Link href="" color={themeColor}>Sign up</Link></p>
            <Strike><StrikeContent>Or continue with</StrikeContent></Strike>
            <div className="logo-list flex">
              {Logos.map(logo => <LogoBox><LogoIcon src={logo}/></LogoBox>)}
            </div>
          </div>
        </Side>
      </div>
    </div>
  );
}

export default App;
