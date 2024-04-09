import styled from 'styled-components';

const Side = styled.div`
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 50%;
    }
`

const SideImg = styled.img`
  max-height: 100vh;
`

const Button = styled.button<any>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  border: none;
  color: white;
  border-radius: 10px;
  padding: 15px;
  font-family: inherit;
  cursor: pointer;
  font-weight: 600;
`

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #D1D1D1;
  padding: 15px;
  width: 100%;
  margin-bottom: 1.4rem;
  font-family: inherit;
  outline: none;
  box-shadow: none;
`

const Checkbox = styled.input<any>`
  accent-color: ${props => props.color};
  font-family: inherit;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 10px
`

const Link = styled.a<any>`
  text-decoration: none;
  font-weight: 600;
  color: ${props => props.color};
  cursor: pointer;
`

const Strike = styled.p`
  width: 100%; 
  text-align: center; 
  border-bottom: 1px solid #D9D9D9; 
  line-height: 0.1em;
  margin: 10px 0 20px; 
`

const StrikeContent = styled.span`
  background:#fff; 
  padding:0 2em; 
`

const LogoBox = styled.div`
  align-items: center;
  border: 1px solid #D9D9D9;
  border-radius: 11px;
  display: flex;
  @media (max-width: 768px) {
    height: 2.5em;
  }
  @media (min-width: 768px) {
    height: 3em;
  }
`

const LogoIcon = styled.img`
  height: 100%;
  cursor: pointer;
`
export {Side, SideImg, Button, Input, Checkbox, Link, Strike, StrikeContent, LogoBox, LogoIcon}