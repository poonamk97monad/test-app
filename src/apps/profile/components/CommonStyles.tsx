import styled from "styled-components";
import { Form, Button, Accordion } from "react-bootstrap";

export const FormControlInput = styled(Form.Control)`
  width: 100%;
  display: block;
  line-height: 20px;
  padding: 12px 13px;
  border: #d6dadc 1px solid !important;
  font-size: 1em;
  color: #5a5a5b;
  font-weight: 300;
  outline-width: 0;
  outline: none;
  resize: none;
  border-radius: 3px;
  border-color: #9e9e9e;
  box-shadow: none !important;
  background-color: transparent;

  :focus{
    border-color: #8ac249 !important;
    background-color: transparent;
  }
  :hover{
    border-color: #8ac249 !important;
  }
`;

export const FormSelectInput = styled(Form.Select)`
    width: 100%;
    display: block;
    line-height: 20px;
    padding: 12px 13px;
    border: #d6dadc 1px solid !important;
    font-size: 1em;
    color: #5a5a5b;
    font-weight: 300;
    outline-width: 0;
    outline: none;
    resize: none;   
    border-radius: 3px;
    border-color: #9e9e9e;
    box-shadow: none !important;
    background-color: transparent;

    :focus{
        border-color: #8ac249 !important;
        background-color: transparent;
    }
    :hover{
        border-color: #8ac249 !important;
    }
`;

export const SaveButton = styled(Button)`
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
    float: right;
    margin-right: 12px !important;

    :hover,
    :focus{
        background-color: #8ac249;
    }
`;

export const DeleteAccordion = styled(Accordion)`
    .accordion-header button{
      color: #000;
    }
    .deleteButton{
      background-color: #00bcd4 !important;
      line-height: 20px;
      position: relative;
      overflow: hidden;
      padding: 13px 20px;
      font-size: 0.9375em;
      font-weight: 400;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      margin: 0;
      border: 0;
      outline: 0;
      border-radius: 3px;
      box-shadow: none !important;
    }
    .deleteButton:hover,
    .deleteButton:focus{
      background-color: #26c6da !important;
      box-shadow: none !important;
    }
`;