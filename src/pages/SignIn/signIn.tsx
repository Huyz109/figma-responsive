import {Side, SideImg, Link, Strike, StrikeContent, LogoBox, LogoIcon, Container} from '../Login/loginItemStyled'
import { Button } from '../../components/Button/button'
import { Input, Checkbox } from '../../components/Input/Input'
const sideImg = require('../../assets/img/side-img.png')
const Google = require('../../assets/img/gg-logo.png')
const Facebook = require('../../assets/img/fb-logo.png')
const Ig = require('../../assets/img/ig-logo.png')
const Twitter = require('../../assets/img/tw-logo.png')

const themeColor = '#7754F6';
const Logos = [Google, Facebook, Ig, Twitter]

const SignIn = () => {
    return (
        <Container>
            <Side className="side-img">
                <SideImg src={sideImg} />
            </Side>
            <Side className="side-content">
            <div className="form">
                <h1 className='heading'>Sign in</h1>
                <p>Create your account in a second</p>
                <Input type="text" placeholder='First Name' color={themeColor}/>
                <Input type="text" placeholder='Last Name'color={themeColor}/>
                <Input type="text" placeholder='Email Address'color={themeColor}/>
                <Input type="text" placeholder='Create Password'color={themeColor}/>
                <div className="remember flex">
                    <div className="keep">
                        <Checkbox type="checkbox" color={themeColor}/> I agree to the terms and privacy policy
                    </div>
                </div>
                <Button backgroundColor={themeColor}>Create an account</Button>
                <p className='signUp-line'>Already a member? <Link href="/" color={themeColor}>Login</Link></p>
                <Strike><StrikeContent>Or continue with</StrikeContent></Strike>
                <div className="logo-list flex">
                    {Logos.map(logo => <LogoBox><LogoIcon src={logo}/></LogoBox>)}
                </div>
            </div>
            </Side>
        </Container>
    )
}

export default SignIn;