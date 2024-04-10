import styled from 'styled-components';

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
  font-size: 1rem;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`

export {Button};