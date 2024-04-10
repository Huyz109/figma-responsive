import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #D1D1D1;
  padding: 15px;
  width: 100%;
  margin-bottom: 1.4rem;
  font-family: inherit;
  box-shadow: none;
  font-size: 1rem;
  &:focus {
    outline: 1px solid ${props => props.color};
  }
`

const Checkbox = styled.input<any>`
  accent-color: ${props => props.color};
  font-family: inherit;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 10px
`

export {Input, Checkbox}