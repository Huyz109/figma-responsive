import styled from 'styled-components';
const sideImg = require('../../assets/img/side-img.png')

const Side = styled.div`
    box-sizing: border-box;
    @media (min-width: 769px) {
        width: 50%;
    }
  max-height: 100vh;
`

const SideImg = styled.img`
  max-height: 100%;
  vertical-align: top;
  min-width: 80%;
`

const Link = styled.a<any>`
  text-decoration: none;
  font-weight: 600;
  color: ${props => props.color};
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
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
  @media (min-width: 769px) {
    height: 3em;
  }
`

const LogoIcon = styled.img`
  height: 100%;
  cursor: pointer;
`

const Container = styled.div`
  .flex {
    display: flex;
  }

  .side-content {
    color: #818181;
    max-height: 100vh;
  }

  .heading {
    color: black;
  }

  .form {
    background-color: white;
  }

  .remember {
    justify-content: space-between;
    margin-bottom: 1rem;
    margin: 1rem 0 1.5rem;
  }

  .keep {
    height: 1.5rem;
    display: flex;
    align-items: center;
  }

  .signUp-line {
    margin: 1.5rem 0 2.2rem;
  }

  .logo-list {
    margin-top: 2.5em;
    gap: 20px;
    justify-content: center;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .side-img {
      display: none;
    }

    .side-content {
      background: url(${sideImg});
      height: 100vh;
      display: flex;
      justify-content: center;
      padding: 1.5rem 0;
    }

    .heading {
      margin-top: 0;
    }

    .form {
      border-radius: 10px;
      padding: 1.8em;
      box-sizing: border-box;
      width: 90%;
    }

    .remember {
      flex-direction: column;
      gap: 0.8em;
      margin-top: 0;
    }
  }

  /* Tablet */
  @media (min-width: 769px) {
    display: flex;

    .side-img {
      text-align: end;
      display: block;
    }

    .side-content {
      padding: 1rem 2rem;
      background-color: white;
    }

  }

  /* PC */
  @media (min-width: 1024px) {
    .side-content {
      padding-left: 70px;
    }

    .form {
      width: 85%;
    }
  }

    /* Portrait */
  @media (orientation: portrait) {
    .side-img {
      display: none;
    }

    .side-content {
      background: url(${sideImg});
      height: 100vh;
      display: flex;
      justify-content: center;
      width: 100vw;
      padding: 1.5rem 0;
    }

    .heading {
      margin-top: 0;
    }

    .form {
      border-radius: 10px;
      padding: 1.8em;
      box-sizing: border-box;
      width: 90%;
    }

    .remember {
      flex-direction: column;
      gap: 0.8em;
      margin-top: 0;
    }
  }

  @media (min-aspect-ratio: 1.7) and (max-height: 700px) {
    .side-img img {
      max-height: max-content;
      max-width: 100%;
    }
  }
`

export {Side, SideImg, Link, Strike, StrikeContent, LogoBox, LogoIcon, Container}