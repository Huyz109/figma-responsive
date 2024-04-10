import {Side, SideImg, Link, Strike, StrikeContent, LogoBox, LogoIcon, Container} from './loginItemStyled'
import { Button } from '../../components/Button/button'
import { Input, Checkbox } from '../../components/Input/Input'
const sideImg = require('../../assets/img/side-img.png')
const Google = require('../../assets/img/gg-logo.png')
const Facebook = require('../../assets/img/fb-logo.png')
const Ig = require('../../assets/img/ig-logo.png')
const Twitter = require('../../assets/img/tw-logo.png')

const themeColor = '#7754F6';
const Logos = [Google, Facebook, Ig, Twitter]

const Login = () => {
    return (
        <Container>
            <Side className="side-img">
                <SideImg src={sideImg} />
            </Side>
            <Side className="side-content">
            <div className="form">
                <h1 className='heading'>Login</h1>
                <p>Login your account in a second</p>
                <Input type="text" placeholder='Email Address' color={themeColor}/>
                <Input type="text" placeholder='Password'color={themeColor}/>
                <div className="remember flex">
                    <div className="keep">
                        <Checkbox type="checkbox" color={themeColor}/> Keep me logged in
                    </div>
                    <Link href="" color={themeColor}>Forget password</Link>
                </div>
                <Button backgroundColor={themeColor}>Log in</Button>
                <p className='signUp-line'>Don't have an account? <Link href="/signin" color={themeColor}>Sign up</Link></p>
                <Strike><StrikeContent>Or continue with</StrikeContent></Strike>
                <div className="logo-list flex">
                    {Logos.map(logo => <LogoBox><LogoIcon src={logo}/></LogoBox>)}
                </div>
            </div>
            </Side>
        </Container>
    )
}

export default Login;