import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../buttons/Buttons";
import { useHistory } from "react-router-dom";
import { BackLink } from "../buttons/BackButton";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../section/GlobalState";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px;
  padding: 0;

  position: relative;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
`;

const Input = styled.div`
  position: absolute;
  left: 25%;
  top: 20%;

  font-size: ${(props) => props.theme.fontlg};
  font-weight: bold;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 16px;

  input[type="radio"] {
    margin: 0px 40px;
    transform: scale(2.5);
    cursor: pointer;

    &:hover {
      background-color: gray;
    }
  }

  input[type="radio"]:checked{
    background-color: #ffa500;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 25%;
  top: 30%;

  font-size: ${(props) => props.theme.fontlg};
  font-weight: bold;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 16px;

  input[type="radio"] {
    margin: 0px 40px;
    transform: scale(2.5);
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 350px 200px;
  margin-bottom: 16px;
`;

const Survey = () => {
  const [optionSelected, setOptionSelected] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const {selectedOption,
    updateSelectedOption} = useContext(GlobalStateContext);

    console.log(selectedOption);

  useEffect(() => {
    const storedSelectedOption = getSelectedOption();
    if (storedSelectedOption) {
      setOptionSelected(storedSelectedOption);
      setIsDisabled(false);
    } else {
      setOptionSelected(null); // Reset selected option
      setIsDisabled(true); // Disable button
    }
  }, []);

  // clear the stored value when the component mounts
  useEffect(() => {
    localStorage.removeItem("selectedOption");
  }, []);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setOptionSelected(option);
    setIsDisabled(false);
    updateSelectedOption(option);
  };

  // This function retrieves the previously stored selected option from the local storage.
  // It calls the getItem method on the localStorage object and passes the key "selectedOption" as an argument
  // to retrieve the value that is stored with that key
  function getSelectedOption() {
    return localStorage.getItem("selectedOption");
  }



  const history = useHistory();

  const handleNextClick = () => {
    history.push("/survey-two");
  };

  // This function defines what happens when the user clicks the "Back" button
  const handleBackClick = () => {
    history.push("/home");
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Section id="survey">
      <form onSubmit={handleSubmit}>
        <Heading>What type of clothes do you wear?</Heading>
        <Input>
          <input
            type="radio"
            value="feminine"
            checked={selectedOption === "feminine"}
            onChange={handleOptionChange}
          />
          feminine
        </Input>
        <Label>
          <input
            type="radio"
            value="masculine"
            checked={selectedOption === "masculine"}
            onChange={handleOptionChange}
          />
          masculine
        </Label>
        <ButtonContainer>
          <BackLink onClick={handleBackClick}>
            <span>&#8249;</span>Back
          </BackLink>
          <PrimaryButton
            type="submit"
            onClick={handleNextClick}
            disabled={isDisabled}
          >
            Next
          </PrimaryButton>
        </ButtonContainer>
      </form>
    </Section>
  );
};

export default Survey;
