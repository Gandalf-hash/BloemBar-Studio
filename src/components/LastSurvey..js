import React from 'react'
import { useContext } from 'react';
import { GlobalStateContext } from '../section/GlobalState';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px;
  padding: 0;

  position: relative;
`;


const SelectedOptions = styled.div`
  position: absolute;
  left: 25%;
  top: 20%;

  font-size: ${(props) => props.theme.fontlg};
  font-weight: bold;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 80px;

  p {
    margin-bottom: 10px;
  }
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const Emphasize = styled.em`
display: flex;
align-items: center;
justify-content: center;

font-size: ${(props) => props.theme.fontlg};

`;


const LastSurvey = () => {
    const { selectedOption } = useContext(GlobalStateContext);
  return (
    <Section>
      <Heading>Thanks for taking time to answer our Survey!</Heading>
      <Emphasize>Here is the list of options you have selected</Emphasize>
      <SelectedOptions>
        <p>Option Selected(First Page): {selectedOption}</p>
      </SelectedOptions>
    </Section>
  )
}

export default LastSurvey;
