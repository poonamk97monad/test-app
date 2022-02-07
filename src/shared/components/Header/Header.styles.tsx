import {
    Nav,
    FormControl,
    Row,
    Col
  } from "react-bootstrap";
import styled from "styled-components";


export const HeaderStyle = styled.div`
  background-color: #000;
  max-height: 130px;
  position: fixed;
  width: 100%;
  z-index:50;
`;

export const TopHeaderRow = styled(Row)`
  width: 100%;
`;

export const TopNavElementCol = styled(Col)`
  text-align: right;

  a#basic-nav-dropdown{
    display: inline-block !important;
    border-radius: 50%;
    color: #fff !important;
  }
  a:hover{
    background-color: #424242;
  }
  .dropdown-menu.show{
    width: 100%;
  }
`;

export const NavLink = styled(Nav.Link)`
  color: #fff !important;
  font-size: 14px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;

  :nth-child(1){
    padding-left: 0 !important;
  }

  :hover{
      color: #2196f3 !important;
  }
`;

export const SearchInput = styled(FormControl)`
  width: 100%;
  height: 40px;
  padding-left: 56px;
  font-size: 16px;
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none !important;
  background-color: #424242;

  :hover{
    background-color: hsla(0,0%,76%,.24);
    color: #fff;
  }

  :focus{
    background-color: hsla(0,0%,76%,.24);
    color: #fff;
  }
`;
