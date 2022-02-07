import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from "@shared/components/AuthProvider";

export function useResetPasswordController(history) {
  const authProvider = useAuth();
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    uid: Yup.string().required("Required"),
    token: Yup.string().required("Required"),
    new_password: Yup.string().required("Required"),
  });

  const submitForm = (values) => {
    setLoading(true);
    try {
      authProvider.loginManager
        .resetPassword(values.uid, values.token, values.new_password)
        .then(() => {
          setLoading(false);
          window.location.href = "/account/login/";
        })
        .catch((error) => {
          if (error) {
            setSubmitError("Invalid credentials");
            setLoading(false);
          }
        });
    } catch (error) {
      setSubmitError("Invalid credentials");
      setLoading(false);
    }
  };

  return {
    loading,
    submitError,
    ResetPasswordSchema,
    submitForm,
  };
}
