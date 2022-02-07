import React from "react";
import { useResetPasswordController } from "./ResetPassword.controller";
import {
  SignInContent,
  CenteredContent,
  CenteredStack,
  StyledCenterSubTitle,
} from "../CommonStyles";
import { ErrorMessage, RegisterLink } from "./ResetPassword.styles";
import { Layout } from "@shared/components";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";

export interface Props {
  match: {
    params: {
      uid: string;
      token: string;
    };
  };
}
export const ResetPassword: React.FC<Props> = (props) => {
  const history = useHistory();
  const { uid, token } = props.match.params;
  const { loading, submitError, ResetPasswordSchema, submitForm } =
    useResetPasswordController(history);

  return (
    <Layout title={"Reset Password"}>
      <SignInContent>
        <CenteredContent>
          <CenteredStack>Reset your password</CenteredStack>
          <StyledCenterSubTitle>
            Enter a new password for your account.
          </StyledCenterSubTitle>
        </CenteredContent>
        {submitError && (
          <ErrorMessage className="text-danger">{submitError}</ErrorMessage>
        )}
        <Formik
          initialValues={{ uid: uid, token: token, new_password: "" }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values, actions) => {
            submitForm(values);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Form.Group className="mb-3" controlId="uid">
                <Form.Label>Uid</Form.Label>
                <Form.Control
                  type="text"
                  name="uid"
                  value={props.values.uid}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.uid && (
                  <div className="text-danger">{props.errors.uid}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="token">
                <Form.Label>Token</Form.Label>
                <Form.Control
                  type="text"
                  name="token"
                  value={props.values.token}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.token && (
                  <div className="text-danger">{props.errors.token}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="new_password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="new_password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                {props.errors.new_password && (
                  <div className="text-danger">{props.errors.new_password}</div>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading}>
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
      </SignInContent>
    </Layout>
  );
};
