import React from "react";
import { useForgotPasswordController } from "./ForgotPassword.controller";
import {
  SignInContent,
  CenteredContent,
  CenteredStack,
  LeftStack,
  StyledCenterSubTitle,
  StyledSubTitle,
  FormControlAuth,
  FormLabel
} from "../CommonStyles";
import { ErrorMessage, ContinueButton, BackToLoginButton } from "./ForgotPassword.styles";
import { Layout } from "@shared/components";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";

export interface Props {}
export const ForgotPassword: React.FC<Props> = () => {
  const history = useHistory();
  const { loading, submitError, ForgotPasswordSchema, submitForm, sentMail } =
    useForgotPasswordController(history);

  return (
    <Layout title={"Sign In"}>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg="6">
            {sentMail ? (
              <CenteredContent>
                <CenteredStack>Confirmation email sent</CenteredStack>
                <StyledCenterSubTitle>
                  An email has been sent to your inbox with a link. Click on the link
                  in the email to choose a new password.
                </StyledCenterSubTitle>
                <BackToLoginButton to={"/account/login/"} title="Back to Login">
                  Back to Login
                </BackToLoginButton>
              </CenteredContent>
            ) : (
              <SignInContent>
                <h2 className="mb-2">I forgot my password</h2>
                <StyledSubTitle>
                  To reset your password, enter the the email address you use.
                </StyledSubTitle>
                {submitError && (
                  <ErrorMessage className="text-danger">{submitError}</ErrorMessage>
                )}
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={ForgotPasswordSchema}
                  onSubmit={(values, actions) => {
                    submitForm(values);
                  }}
                >
                  {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                      <Form.Group className="mb-4" controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControlAuth 
                          type="text"
                          name="email"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}>
                        </FormControlAuth>
                        {props.errors.email && (
                          <div className="text-danger">{props.errors.email}</div>
                        )}
                      </Form.Group>

                      <ContinueButton type="submit" title="Continue" disabled={loading}>
                        Continue
                      </ContinueButton>
                      <BackToLoginButton to={"/account/login/"} title="Back to Login">
                        Back to Login
                      </BackToLoginButton>
                    </Form>
                  )}
                </Formik>
              </SignInContent>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
