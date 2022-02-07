import React from "react";
import { FooterSection, FooterRow, FooterLogo, FooterCol, SubscribeSection, SubscribeInput, SignupButton, FooterBottom } from './Footer.styles'
import {
  Container,
  Form,
  Row,
  Col
  } from "react-bootstrap";
import unityLogo from './unity-logo.svg'
interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
    <FooterSection>
      <Container>
        <FooterLogo>
          <img src={ unityLogo }></img>
        </FooterLogo>
        <FooterRow>
          <FooterCol lg='2'>
            <h4>Language</h4>
            <a href="#">English</a>
            <a href="#">English</a>
            <a href="#">English</a>
            <a href="#">English</a>
          </FooterCol>
          <FooterCol lg='2'>
            <h4>Sell Assets on Unity</h4>
            <a href="#">Sell Assets</a>
            <a href="#">Submission Guidelines</a>
            <a href="#">Asset Store Tools</a>
            <a href="#">Publisher Login</a>
            <a href="#">FAQ</a>
          </FooterCol>
          <FooterCol lg='2'>
            <h4>Discover</h4>
            <a href="#">Most Popular Assets</a>
            <a href="#">Top Free Assets</a>
            <a href="#">Top Paid Assets</a>
            <a href="#">Asset Store Blog</a>
          </FooterCol>
          <FooterCol lg='2'>
            <h4>Affiliate Program</h4>
            <a href="#">Membership</a>
            <a href="#">Link Maker</a>
            <a href="#">Affiliate Id</a>
            
          </FooterCol>
          <FooterCol lg='4'>
            <h4>Get Asset Store news</h4>
            <SubscribeSection>
              <Form className="d-flex">
                <SubscribeInput 
                  type="email"
                  placeholder="Email"
                  aria-label="Email">
                </SubscribeInput>
                <SignupButton>
                  Sign Up
                </SignupButton>
              </Form>
            </SubscribeSection>
          </FooterCol>
          
        </FooterRow>
        
        <FooterRow>
          <FooterCol lg='2'>
            <h4>Help</h4>
            <a href="#">FAQ</a>
            <a href="#">Customer Service</a>
          </FooterCol>
          <FooterCol lg='2'>
            <h4>Feedback</h4>
            <a href="#">Leave Feedback</a>
          </FooterCol>
          <FooterCol lg='2'>
            <h4>Partners Program</h4>
            <a href="#">Partners</a>
          </FooterCol>
          <FooterCol lg='2'>
            <h4>Download</h4>
            <a href="#">Get Unity</a>
            <a href="#">Download Archive</a>
            <a href="#">Beta Program</a>
            
          </FooterCol>
          <FooterCol lg='4'>
            <h4>Follow the Asset Store</h4>
            <a href="#">Leave Feedback</a>
          </FooterCol>

          <FooterBottom>
            <div className="copyrightSection">
              Copyright © 2022 Unity Technologies
            </div>
            <div className="allPrice"> 
              All prices are exclusive of tax
            </div>

            <div>
              <a href="#">Terms of Service and EULA</a>
              <a href="#">Cookies</a>
              <a href="#">Site Map</a>
              <a href="#">Do Not Sell My Personal Information</a>
              <a href="#">Cookies Settings</a>
            </div>
          </FooterBottom>
          
        </FooterRow>
      </Container>
    </FooterSection>
     
    </>
  );
};

export default Footer;
