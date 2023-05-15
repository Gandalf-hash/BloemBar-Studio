import React, { useState } from 'react'
import styled from 'styled-components';


const Form = (props) => {
  
  const [focused, setFocused] = useState(false);
  const { label,errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  }

  const Container = styled.div`
  span {
    display: none;
  }

  span:invalid{
    display: block;
  }
  `
  const Label = styled.label`
  display: block;
  text-align: center;
  padding: 5px;
  font-size: ${props => props.theme.fontlg};
  font-family: 'Sirin Stencil';
  
  `

  const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid;

  `



  return (
    <Container className='form'>
      <Label>{label}</Label>
      <Input 
      {...inputProps} 
      onChange={() => onChange()} 
      onBlur={() => handleFocus()}
      onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} 
      focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </Container>
  
  )
}

export default Form;
