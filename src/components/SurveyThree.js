import { useState } from "react";
import styled from "styled-components";
import { BackLink } from "../buttons/BackButton";
import { PrimaryButton } from "../buttons/Buttons";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const sizeOptions = [
    { value: "", label: "Please select an option" },
    { value: "x-small", label: "X-Small" },
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "x-large", label: "X-Large" }
  ];

  const Container = styled.div`
  font-family: "Sirin Stencil";

  `

  const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const Select = styled.select`
display: flex;
justify-content: center;
align-items: center;
font-family: "Sirin Stencil";
font-size: ${(props) => props.theme.fontlg};
font-weight: bold;


// For a better user experience. if the option is selected I set the border to none else to 1px solid gray
border: ${(props) => (props.value ? "none" : "1px solid gray")}; // conditional border
border-radius: 10px;

& option:selected{
  color: black;
  background-color: gray;
}

width: 25%;
height: 50px;

margin: 100px 500px;
padding: 10px;

-webkit-appearance: none;
appearance: none;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-position-x: 100%;
background-position-y: 50%;
padding-right: 1.5em;

&:after{
  content: '';
  outline: none;
}

&:hover{
  cursor: pointer;
}
`;



const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px;
`;

const SurveyThree = () => {
    const [selectedSize, setSelectedSize] = useState(sizeOptions[0].value);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
      setIsDisabled(selectedSize === sizeOptions[0].value);
    }, [selectedSize]);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
      };
      
      const history = useHistory();

      const handleNextClick = () => {
        history.push("/survey-four");
      };
      const handleBackClick = () => {
        history.push("/survey-two");


      }


   

  return (
    <>
    <Container>
      <Heading>What size shirt are you, on average?</Heading>
      <Select value={selectedSize} onChange={handleSizeChange}>
        {sizeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
    <ButtonContainer>
        <BackLink onClick={handleBackClick}><span>&#8249;</span>Back</BackLink>
        <PrimaryButton type="submit" onClick={handleNextClick} disabled={isDisabled}>Next</PrimaryButton>
      </ButtonContainer>
      </>
  )
}

export default SurveyThree;
