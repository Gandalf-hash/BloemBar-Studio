import styled from "styled-components";
import { Link } from "react-router-dom";

const BackLink = styled(Link)`
  width: 60px;
  padding: 0;
  text-align: center;
  display: inline-block;
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Sirin Stencil";
  font-weight: bold;
  border-radius: 4px;
  padding: 8px 16px;
  color: #333333;
  cursor: pointer;

  margin: 0 auto 16px auto;
   

 span{
  text-decoration: none;
  display: inline-block;
  padding: 0 2px;
 }


  &:hover {
    text-decoration: underline;
    transform: scale(1.2,1.2);
  }
`;

export { BackLink };
