import React from "react";
import { Layout } from "@shared/components";
import {Row, Col, Container, Table, Accordion, Form, Button} from 'react-bootstrap';
import { FormControlInput, FormSelectInput, SaveButton, DeleteAccordion } from "../../components/CommonStyles";

interface ProfileEditProps {}

export const ProfileEdit: React.FC<ProfileEditProps> = () => {
  return <Layout title={"Profile | Assets Store"}>
    <div>
    <Container fluid>
      <h1>My Account Settings</h1>
      <br />
      <h3>Personal Information</h3>
      <br />
      <Form>
        <Table hover>
          <tbody>
            <tr>
            <Row>
              <Col xs={3}><b>Name</b></Col>
              <Col xs={9}>
              <Form.Group>
                <FormControlInput 
                  size="md" 
                  type="text" 
                  placeholder="John Doe" 
                  className="border-0" 
                  value={"Omkar Kelkar"}>
                </FormControlInput>
              </Form.Group>
              </Col>
            </Row>
            </tr>
            <tr>
            <Row>
              <Col xs={3}><b>Username</b></Col>
              <Col xs={9}>
                <FormControlInput 
                  size="md" 
                  type="text" 
                  placeholder="John_Doe" 
                  className="border-0" 
                  value={"Omkar_Kelkar"}>
                </FormControlInput>
              </Col>
            </Row>
            </tr>
            <tr>
            <Row>
              <Col xs={3}><b>Email</b></Col>
              <Col xs={9}>
                <FormControlInput 
                  size="md" 
                  type="text" 
                  placeholder="example@email.com" 
                  className="border-0" 
                  value={"omkar.kelkar@monadinfotech.com"}>
                </FormControlInput>
              </Col>
            </Row>
            </tr>
            <tr>
            <Row>
              <Col xs={3}><b>Location</b></Col>
              <Col xs={9}>
                <FormControlInput 
                  size="md" 
                  type="text" 
                  placeholder="Mumbai, India" 
                  className="border-0" 
                  value={"Mumbai, India"}>  
                </FormControlInput>
              </Col>
            </Row>
            </tr>
            <tr>
            <Row>
              <Col xs={3}><b>Timezone</b></Col>
              <Col xs={9}>
                <FormSelectInput 
                  aria-label="Asia/ Kolkata" 
                  className="border-0">
                  <option>Asia/Kolkata</option>    
                </FormSelectInput>
              </Col>
            </Row>
            </tr>
            <tr>
            <Row>
              <Col xs={3}><b>Preferred language</b></Col>
              <Col xs={9}>
                <FormControlInput 
                  size="md" 
                  type="text" 
                  placeholder="English, Hindi" 
                  className="border-0" 
                  value={"English, Hindi, Marathi"}>  
                </FormControlInput>
              </Col>
            </Row>
            </tr>
            
            <Row>
              <Col>
                <SaveButton>
                  Save
                </SaveButton>
              </Col>
            </Row>
          </tbody>
        </Table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Marketing Activities</h3>
        <br />
        <Table hover>
          <tbody>
            <tr>
            <Row>
              <Col xs={4}><b>Marketing Activities Preferences</b></Col>
              <Col xs={7}>Change the Marketing Activities Unity may direct to you (including via email and social media).</Col>
              <Col>Edit</Col>
            </Row>
            </tr>
          </tbody>
        </Table>
      </Form>
      <br />
      <h3>Account Management</h3>
      <br />
      <DeleteAccordion defaultActiveKey="0" className="deleteYourAccount">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Request to Delete Your Account</Accordion.Header>
          <Accordion.Body>
          <ul>
            <li>By clicking "Delete Account", you can submit an account deletion request that will permanently remove the account and all associated personal data.</li>
            <li>Please note that certain financial record-keeping information may be maintained in our systems as part of our federal and state compliance obligations. Deleting your Unity account does not relieve you of the obligation to pay any outstanding subscription amounts owed. Also, Unity may not be able to fulfill a request to delete a project without first receiving an account administrator’s permission. Please refer to our <a href="https://unity3d.com/legal/privacy-policy">Privacy Policy</a> for additional details.</li>
            <li>Click "Delete Account" to learn more.</li>
          </ul>
          <Button className="deleteButton">
            Delete Account
          </Button>
          </Accordion.Body>
        </Accordion.Item>
      </DeleteAccordion>
      <br />
      <br />
      <br />
    </Container>
    </div>
    </Layout>;
};
