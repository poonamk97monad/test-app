import React from "react";
import { useRegisterController } from "./Register.controller";
import {
  ErrorMessage,
  LoginLink,
  StyledInputGroupText,
  AlreadyHaveAccount,
  PhoneInput,
  GenerateOtpButton
} from "./Register.styles";
import { Layout } from "@shared/components";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

export interface Props {}
export const Register: React.FC<Props> = () => {
  const history = useHistory();
  const {
    loading,
    submitError,
    RegisterSchema,
    submitForm,
    GenerateOtpSchema,
    otpSent,
    generateOtp,
    otpVerified,
    VerifyOtpSchema,
    phone,
    verifyOtp
  } = useRegisterController(history);

  return (
    <Layout title={"Create a Account"}>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg="10">
            <h2 className="mb-0">Create a Account</h2>
            <AlreadyHaveAccount>
              If you already have a Credentials, please <a href="/account/login/">sign in here</a>.
            </AlreadyHaveAccount>
            {submitError && (
              <ErrorMessage className="text-danger">{submitError}</ErrorMessage>
            )}
          </Col>
        </Row>    
      </Container>

      <Container>
      <Row className="justify-content-center">
          <Col lg="10">
      {!otpVerified ? (
        otpSent ? (
          <Formik
            initialValues={{
              otp: "",
            }}
            validationSchema={VerifyOtpSchema}
            onSubmit={(values, actions) => {
              verifyOtp(values);
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                
                  <Row>
                    <Col xs sm lg="4" className="mb-4 mt-4">
                      <InputGroup>
                        <PhoneInput
                          type="text"
                          placeholder="Enter Otp"
                          aria-label="Otp"
                          aria-describedby="verifyOtp"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          name="otp"
                          id="otp">
                        </PhoneInput>
                        <GenerateOtpButton
                          type="submit"
                          disabled={loading}>
                          Verify Otp
                        </GenerateOtpButton>
                      </InputGroup>
                      {props.errors.otp && (
                        <div className="text-danger">{props.errors.otp}</div>
                      )}
                    </Col>
                  </Row>
                
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              phone: "",
            }}
            validationSchema={GenerateOtpSchema}
            onSubmit={(values, actions) => {
              generateOtp(values);
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                
                  <Row>
                    <Col xs sm lg="4" className="mb-4 mt-4">
                      <InputGroup>
                      <PhoneInput
                          type="text"
                          placeholder="Phone"
                          aria-label="Phone"
                          aria-describedby="generateOtp"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          name="phone"
                          id="phone">
                        </PhoneInput>
                        <GenerateOtpButton
                          type="submit"
                          disabled={loading}>
                          Generate Otp
                        </GenerateOtpButton>
                      </InputGroup>
                      {props.errors.phone && (
                        <div className="text-danger">{props.errors.phone}</div>
                      )}
                    </Col>
                  </Row>
                
              </Form>
            )}
          </Formik>
        )
      ) : (
        <Formik
          initialValues={{
            email: "",
            fullname: "",
            username: "",
            password: "",
            agreement: false,
            privacy: false,
            markenting: false,
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, actions) => {
            submitForm(values);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                      {props.errors.email && (
                        <div className="text-danger">{props.errors.email}</div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                      {props.errors.username && (
                        <div className="text-danger">
                          {props.errors.username}
                        </div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        label="I have read and agree to the Unity Terms of Service(required)."
                      />
                      {props.errors.agreement && (
                        <div className="text-danger">
                          {props.errors.agreement}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        name="privacy"
                        id="privacy"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        label="I acknowledge the Unity Privacy Policy [Republic of Korea Residents agree to the Unity Collection and Use of Personal Information](required)."
                      />
                      {props.errors.privacy && (
                        <div className="text-danger">
                          {props.errors.privacy}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        id="markenting"
                        name="markenting"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        label="I agree to have Marketing Activities directed to me by and receive marketing and promotional information from Unity, including via email and social media(optional)."
                      />
                      {props.errors.markenting && (
                        <div className="text-danger">
                          {props.errors.markenting}
                        </div>
                      )}
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={loading}>
                      Register
                    </Button>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                      {props.errors.password && (
                        <div className="text-danger">
                          {props.errors.password}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullname"
                        placeholder="Enter Full Name"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                      />
                      {props.errors.fullname && (
                        <div className="text-danger">
                          {props.errors.fullname}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              
            </Form>
          )}
        </Formik>
      )}
      </Col>
      </Row>
      </Container>        
    </Layout>
  );
};
