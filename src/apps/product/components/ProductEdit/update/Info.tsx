import React ,{useState} from "react";
import { InputLabel} from "./MediaUpload.styles";
import { Form, Button } from "react-bootstrap";
import {usePackageController} from "./PackageEdit.controller";

export interface Props {}
export const Info: React.FC<Props> =() => {
     const {formik,loading} = usePackageController();
    const [inputField , setInputField] = useState({
        summary: '',
        description: '',
        technical_details: '',
        name:''
    })

    return ( 
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
          <InputLabel>Package Name: </InputLabel>
            <Form.Control  {...formik.getFieldProps('name')} name="name" as="textarea" rows={3} />
            {formik.errors.name && (                
                <div className="text-danger">{formik.errors.name}</div>
             )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="summary">
          <InputLabel>Summary: </InputLabel>
            <Form.Control  {...formik.getFieldProps('summary')} name="summary" as="textarea" rows={3} />
            {formik.errors.name && (                
                <div className="text-danger">{formik.errors.summary}</div>
             )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
          <InputLabel>Description: </InputLabel>
            <Form.Control  {...formik.getFieldProps('description')}  name="description" as="textarea" rows={3} />
            {formik.errors.name && (                
                <div className="text-danger">{formik.errors.description}</div>
             )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="technical_details">
          <InputLabel>Technical details: </InputLabel>
            <Form.Control  {...formik.getFieldProps('technical_details')} name="technical_details" as="textarea" rows={3} />
            {formik.errors.name && (                
                <div className="text-danger">{formik.errors.technical_details}</div>
             )}
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}> Save </Button>
      </Form>

    );

};