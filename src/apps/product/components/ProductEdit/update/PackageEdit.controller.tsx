import * as Yup from "yup";
import { useState ,useEffect} from "react";
import { useFormik } from 'formik';
import axios from "axios";
import { config } from "@static/js/env.config";
// import { useAuth } from "@shared/components/AuthProvider";

export interface ReserveItemFields {
  summary: string;
  description: string;
  technical_details: string;
  name:string;
  categorie:string;
}
export function usePackageController() {
  const categories = [
    {
      id: 1,
      title: "apple",
    },
    {
      id: 2,
      title: "bbbbb",
    },
    {
      id: 3,
      title: "cccc",
    },
  ];
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
      technical_details: '',
      categorie:''
    },
    validationSchema: Yup.object<ReserveItemFields>({
      name: Yup.string().required("Name is Required"),
      summary: Yup.string().required("Summary is Required"),
      description: Yup.string().required("Description is Required"),
      technical_details: Yup.string().required("Technical Details is Required"),
      categorie: Yup.string().required("categorie is Required")
    }),
    onSubmit: submitInfo
  });
  
  const getCat = () => {
    console.log("******fffffffffffff")
    const payload = {};
    axios({
      method: "get",
      url: "https://platform.techxr.co/categories",
      data: payload,
    })
      .then(({ data }) => {
        console.log("******")
        console.log(data)
      })
      .catch((error) => {
        console.log("******")
        console.log(error)
      });

  };
  useEffect(() => {
    getCat();
  }, []);


  return {
    submitInfo,
    formik,
    loading,
    categories
  };
}
