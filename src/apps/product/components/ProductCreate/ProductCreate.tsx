import React,{ useState , useEffect}  from "react";
import { Layout } from "@shared/components";
import { Form, Button,Modal } from "react-bootstrap";
import { InputLabel} from "./../ProductEdit/update/MediaUpload.styles";
import * as Yup from "yup";
import { useFormik } from 'formik';

interface ProductCreateProps {}

export interface ProductCreateFields {
    name:string;
    categorie:string;
  }


export const ProductCreate: React.FC<ProductCreateProps> = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const formik = useFormik<ProductCreateFields>({
    initialValues: {
      name:'',
      categorie:''
    },
    validationSchema: Yup.object<ProductCreateFields>({
      name: Yup.string().required("Name is Required"),
      categorie: Yup.string().required("categorie is Required")
    }),
    onSubmit: submitInfo
  });

  useEffect(() => {
    if(!show){
      setShow(true)
    }
  }, []);


return (
  <Layout title={"Product create | Assets Store"}>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
          <InputLabel>Package Name: </InputLabel>
            <Form.Control  {...formik.getFieldProps('name')} name="name" as="textarea" rows={3} />
            {formik.errors.name && (                
                <div className="text-danger">{formik.errors.name}</div>
             )}
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="summary">
          <InputLabel>Categories: </InputLabel>
            <Form.Select  {...formik.getFieldProps('categorie')} name="categorie" >
            {categories.map((categorie) => (
              <option value={categorie.id} key={categorie.id}>{categorie.title}</option>
            ))}
          
            {formik.errors.categorie && (                
                <div className="text-danger">{formik.errors.categorie}</div>
             )}
          </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}> Craete </Button>
      </Form>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
  </Layout>);
};
