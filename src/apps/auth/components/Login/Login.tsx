import React from "react";
import { useLoginController } from "./Login.controller";
import { SignInContent, FormLabel, FormControlAuth, LoginButton } from "../CommonStyles";
import { ErrorMessage, RegisterLink } from "./Login.styles";
import { Layout } from "@shared/components";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";

export interface Props {}
export const Login: React.FC<Props> = () => {
  const history = useHistory();
  const { loading, submitError, LoginSchema, submitLoginForm } =
    useLoginController(history);

  return (
    <Layout title={"Sign In"}>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg="10">
            <SignInContent>
              <h2 className="mb-5">Sign In</h2>
              {submitError && (
                <ErrorMessage className="text-danger">{submitError}</ErrorMessage>
              )}
              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {
                  submitLoginForm(values);
                }}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <FormLabel>Username</FormLabel>
                      <FormControlAuth
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}>
                      </FormControlAuth>
                      {props.errors.username && (
                        <div className="text-danger">{props.errors.username}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControlAuth
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}>
                      </FormControlAuth>
                      {props.errors.password && (
                        <div className="text-danger">{props.errors.password}</div>
                      )}
                    </Form.Group>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3 remember-me-label" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                      </Col>
                      <Col align="end">
                        <RegisterLink to={"/account/forgotpassword/"}>
                          Forgot Password?
                        </RegisterLink>
                        <RegisterLink to={"/account/register/"}>
                          Create Account
                        </RegisterLink>
                      </Col>
                    </Row>

                    <LoginButton type="submit" disabled={loading}>
                      Login
                    </LoginButton>
                    
                  </Form>
                )}
              </Formik>
            </SignInContent>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
