import React from "react";
import styled from "styled-components";
import Image1 from "../assets/surveyImages/Boho.jpg";
import Image2 from "../assets/surveyImages/Casual.jpg";
import Image3 from "../assets/surveyImages/Cute.jpg";
import Image4 from "../assets/surveyImages/Elegant.jpg";
import Image5 from "../assets/surveyImages/Modest.jpg";
import Image6 from "../assets/surveyImages/Party.jpg";
import Image7 from "../assets/surveyImages/Sexy.jpg";
import Image8 from "../assets/surveyImages/Street.jpg";
import { useState } from "react";
import { BackLink } from "../buttons/BackButton";
import { PrimaryButton } from "../buttons/Buttons";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../section/GlobalState";


const GLOBAL_STORAGE_KEY = "selectedOption";


const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const PictureGrid = styled.div`
width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 35px 280px ;

  img {
    width: 50%;
    height: 75%;
    border: 4px solid gray;
    border-radius: 5%;
    padding: 10px;

    &:hover{
      cursor: pointer;
      transform: scale(1.09);
      border: 4px solid rgb(102, 102, 153);
      background-color: rgb(217, 217, 217);
    }
    

    &.selected {
      border: 4px solid #669999;

    }
    
  }

`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PictureTitle = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  margin-top: 14px;
`;

const Container = styled.div`
  // height: 100vh; // Set container height to viewport height
  overflow: hidden; // Prevent scrolling 
  display: flex; // Use flexbox to align items 
  flex-direction: column; // Set flex direction to column 
  justify-content: flex-end; // Align items vertically with equal spacing between them

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 15px;
`;



const SurveyTwo = () => {
  const { selectedOption, updateSelectedOption } = useContext(GlobalStateContext);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
 
console.log(selectedOption);
    

  useEffect(() => {
    const storedSelectedOption = window[GLOBAL_STORAGE_KEY];
    if (storedSelectedOption) {
      setSelectedImage(storedSelectedOption);
      updateSelectedOption(pictures.find((picture) => picture.src === storedSelectedOption).title);
      setIsDisabled(false);
    } else {
      setSelectedImage(null); // Reset selected option
      setIsDisabled(true); // Disable button
    }
   
  }, []);



  const handleImageClick = (event,image) => {
    const option = event.target.value;
    setSelectedImage(option);
    setIsDisabled(false);
    window[GLOBAL_STORAGE_KEY] = option;
    updateSelectedOption(option);

    if (selectedImage === image) {
      setSelectedImage(null);
      setIsDisabled(true);
      localStorage.removeItem(GLOBAL_STORAGE_KEY);
    } else {
      setSelectedImage(image);
      setIsDisabled(false);
      localStorage.setItem(GLOBAL_STORAGE_KEY, image);
    }

  };

  const history = useHistory();

  const handleNextClick = () => {
    history.push("/survey-three");

    if (selectedImage) {
      const option = pictures.find((picture) => picture.src === selectedImage).title;
      updateSelectedOption(option);
    }
  };
  const handleBackClick = () => {
    history.push("/survey");
  }

  const handleOptionChange = (event) => {
    setSelectedImage(event.target.src);
    setIsDisabled(false);
  };



  const pictures = [
    { src: Image1, title: "Boho" },
    { src: Image2, title: "Casual" },
    { src: Image3, title: "Cute" },
    { src: Image4, title: "Elegant" },
    { src: Image5, title: "Modest" },
    { src: Image6, title: "Party" },
    { src: Image7, title: "Sexy" },
    { src: Image8, title: "Street" },
  ];

  return (
    <Container>
      <Heading>What style of clothing do you usually wear?</Heading>
      <PictureGrid>
        {pictures.map((picture, index) => (
          <PictureContainer key={index}>
            <img src={picture.src} alt={picture.title} onChange={handleOptionChange} className={selectedImage === picture.src ? "selected" : undefined}  onClick={(event) => handleImageClick(event, picture.src)} />
            <PictureTitle>{picture.title}</PictureTitle>
          </PictureContainer>
        ))}
      </PictureGrid> 
      <ButtonContainer>
      <BackLink onClick={handleBackClick}><span>&#8249;</span>Back</BackLink>
      <PrimaryButton type="submit" onClick={handleNextClick} disabled={isDisabled} >Next</PrimaryButton>
      </ButtonContainer>
    </Container>
  )
        };

export default SurveyTwo;
