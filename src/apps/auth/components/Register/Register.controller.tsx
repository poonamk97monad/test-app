import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from "@shared/components/AuthProvider";

export function useRegisterController(history) {
  const authProvider = useAuth();
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [phone, setPhone] = useState("");

  const GenerateOtpSchema = Yup.object().shape({
    phone: Yup.string()
      .min(10, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const generateOtp = (values) => {
    setPhone(values.phone);
    setLoading(true);
    try {
      authProvider.loginManager
        .generateOtp(values.phone)
        .then(() => {
          setOtpSent(true);
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

  const VerifyOtpSchema = Yup.object().shape({
    otp: Yup.string().required("Required"),
  });

  const verifyOtp = (values) => {
    setLoading(true);
    try {
      authProvider.loginManager
        .verifyOtp(phone, values.otp)
        .then(() => {
          setOtpVerified(true);
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

  const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
    email: Yup.string().required("Required"),
    fullname: Yup.string().required("Required"),
    agreement: Yup.string().required("Required"),
    privacy: Yup.string().required("Required"),
    markenting: Yup.string().required("Required"),
  });

  const submitForm = (values) => {
    setLoading(true);
    const profile = {
      phone: phone,
    };
    try {
      authProvider.loginManager
        .signupWithUsernameAndPassword(
          values.username,
          values.password,
          values.email,
          values.fullname.split(" ").slice(0, -1).join(" "),
          values.fullname.split(" ").slice(-1).join(" "),
          profile
        )
        .then(() => {
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
    RegisterSchema,
    submitForm,
    GenerateOtpSchema,
    otpSent,
    generateOtp,
    otpVerified,
    VerifyOtpSchema,
    verifyOtp,
    phone,
  };
}
