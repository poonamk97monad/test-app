import styled from "styled-components";
import {
    Row,
    Col,
    FormControl
    } from "react-bootstrap";

export const FooterSection = styled.div`
  background: #000;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 60px 0px 0;

  a{
     text-decoration: none !important;
  }
  a:hover{
     color: #2196f3 !important;
  }
`;

export const SubscribeSection = styled.div`
   
`;

export const SubscribeInput = styled(FormControl)`
   flex: 1 1 auto;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   margin: 0;
   padding: 0 10px;
   line-height: 15px;
   min-width: 150px;
   outline: none;
   font-size: 14px;
   height: 40px;
   border-radius: 4px;
   border: solid 1px #757575;
   background-color: #000;
   margin-right: 10px;
   color: #fff;
   box-shadow: none !important;

   :hover,
   :focus{
      border: solid 1px #757575;
      background-color: #000;
      color: #fff;
   }
`;

export const SignupButton = styled.a`
   display: flex !important;
   flex: 0 0 auto;
   align-items: center;
   justify-content: center;
   width: 100px;
   height: 40px;
   background-color: #2196f3;
   border-radius: 4px;
   color: #fff !important;
   cursor: pointer;
   text-decoration: none;
   position: relative;

   :hover,
   :focus{
      color: #fff !important;
   }
`;



export const FooterRow = styled(Row)`
   width: 100%;
   margin-bottom: 30px;

   :last-child{
      margin-bottom: 0;
   }
`;

export const FooterCol = styled(Col)`
 text-align: left;

 h4 {
   color: #fff;
   font-size: 14px;
   font-weight: 700;
   line-height: 24px;
 }

 a {
   color: #757575 !important;
   font-size: 14px;
   line-height: 26px;
   display: block;
 }
`;

export const FooterLogo = styled.div`
   text-align: left;
   padding: 60px 0px 40px;
`;


export const FooterBottom = styled.div`
   display: flex;
   flex: 0 0 auto;
   justify-content: left;
   width: 100%;
   margin: 50px auto 0!important;
   padding: 20px 0;
   font-size: 12px;
   color: #757575 !important;
   border-top: 1px solid #484848;

   .copyrightSection,
   .allPrice,
   a{
      margin-right: 15px;
   }
`;