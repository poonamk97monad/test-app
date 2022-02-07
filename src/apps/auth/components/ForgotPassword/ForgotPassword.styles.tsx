import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ErrorMessage = styled.div`
  justify-content: left;
  padding-bottom: 15px;
  padding-bottom: 15px;
  font-size: 14px;
`;

export const BackToLoginButton = styled(Link)`
  color: #9e9e9e;
  padding: 12px 20px;
  border: 1px solid #9e9e9e !important;
  background-color: transparent;
  line-height: 20px;
  display: block;
  float: left;
  position: relative;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-radius: 3px;
  margin-left: 15px;

  :hover,
  :focus{
    color: #9e9e9e;
  }
`;

export const ContinueButton = styled(Button)`
  background-color: #8ac249;
  line-height: 20px;
  display: block;
  float: left;
  position: relative;
  overflow: hidden;
  padding: 13px 15px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  border: 0;
  outline: 0;
  border-image-width: 0;
  border-radius: 3px;
  box-shadow: none !important;

  :hover,
  :focus{
    background-color: #8ac249;
  }
`;

