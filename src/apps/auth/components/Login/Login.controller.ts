import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from "@shared/components/AuthProvider";

export function useLoginController(history) {
  const authProvider = useAuth();
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const submitLoginForm = (values) => {
    setLoading(true);
    try {
      authProvider.loginManager
        .loginWithUsernameAndPassword(values.username, values.password)
        .then(() => {
          window.location.href = "/profile/";
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
    LoginSchema,
    submitLoginForm,
  };
}
