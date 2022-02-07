import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from 'formik';

// import { useAuth } from "@shared/components/AuthProvider";

export interface ReserveItemFields {
  summary: string;
  description: string;
  technical_details: string;
  name:string;
}
export function usePackageController() {
  
  const [loading, setLoading] = useState(false);

  const submitInfo = (value) => {
    setLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
    };
   fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        console.log(data)});

    // const url = "https://randomuser.me/api/?results=15";

  };

  const formik = useFormik<ReserveItemFields>({
    initialValues: {
      name:'',
      summary: '',
      description: '',
      technical_details: ''
    },
    validationSchema: Yup.object<ReserveItemFields>({
      name: Yup.string().required("Name is Required"),
      summary: Yup.string().required("Summary is Required"),
      description: Yup.string().required("Description is Required"),
      technical_details: Yup.string().required("Technical Details is Required")
    }),
    onSubmit: submitInfo
  });
  return {
    submitInfo,
    formik,
    loading
  };
}
