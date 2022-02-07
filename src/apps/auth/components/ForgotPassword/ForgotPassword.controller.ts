import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from "@shared/components/AuthProvider";

export function useForgotPasswordController(history) {
  const authProvider = useAuth();
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [sentMail, setSentMail] = useState(false);

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
  });

  const submitForm = (values) => {
    setLoading(true);
    try {
      authProvider.loginManager
        .forgotPassword(values.email)
        .then(() => {
          setSentMail(true);
          setLoading(false);
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
    ForgotPasswordSchema,
    submitForm,
    sentMail,
  };
}
