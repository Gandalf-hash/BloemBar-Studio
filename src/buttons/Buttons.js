import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: #669999;
  color: #000000;
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Sirin Stencil";
  font-weight: bold;
  padding: 10px 20px;
  width: 25%;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto 16px auto;



  &:hover {
    background-color: rgb(102, 102, 153);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



export { PrimaryButton};
