import { useState } from "react";
import styled from "styled-components";
import { BackLink } from "../buttons/BackButton";
import { PrimaryButton } from "../buttons/Buttons";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  font-family: "Sirin Stencil";
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const InputContainer = styled.div`

width: 50%;
height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
margin: 75px -116px;
padding: 10px;
text-align: center;
background-color: inherit;


  label {
    position: absolute;
    margin-left: 80px;
    margin-top: 15px;

    font-size: ${(props) => props.theme.fontlg};
  }

  input {
    width: 25%;
    height: 30px;
    position: relative;
    left: 170px;
    right: 0;
    top: 1px;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  font-family: "Sirin Stencil";
font-weight: bold;
letter-spacing: 1px;
padding: -2px 1px;

border: 1px solid gray;
    border-top: none;
    border-left: none;
    border-right: none;
background-color: inherit;

transition: all 0.3s ease;

&:focus::-webkit-input-placeholder {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
  &:not(:focus)::-webkit-input-placeholder {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
  }


&:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-color: ${(props) => props.theme.primaryColor};
    
  }

  &::placeholder {
    color: gray;
    font-size: ${(props) => props.theme.fontsm};
    transition: all 0.3s ease;
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px 85px;
`;


const SurveyFour = () => {
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
//   console.log("value:", value);
//   console.log("isDisabled:", isDisabled);

  useEffect (() => {
      setIsDisabled(value === '')
    //   console.log("isDisabled updated:", value === '');
  },[value])

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  const history = useHistory();

  const handleNextClick = () => {
    history.push("/last-survey");
  };
  const handleBackClick = () => {
    history.push("/survey-three");
  }
  return (
    <>
    <Container>
          <Heading>How much do you usually spend on clothing in 3 months?</Heading>
          <InputContainer>
              <label>R</label>
              <input
                  type="text"
                  placeholder="Enter a value e.g 200"
                  value={value}
                  onChange={handleInputChange} />
          </InputContainer>
      </Container>
      <ButtonContainer>
              <BackLink onClick={handleBackClick}><span>&#8249;</span>Back</BackLink>
              <PrimaryButton type="submit" onClick={handleNextClick} disabled={isDisabled}>Done</PrimaryButton>
          </ButtonContainer>
          </>
  );
};

export default SurveyFour;
