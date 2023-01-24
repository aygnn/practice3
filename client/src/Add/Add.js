import React from 'react'
import './Add.scss';
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import TextField from '@mui/material/TextField';

const SignInSchema = Yup.object().shape({
  image: Yup.string().required("Image is required"),
  name: Yup.string().required("Product name is required"),
  price: Yup.string().required("Price is required"),
  stock: Yup.number().required("Stock is required"),

});
export default function Add() {
  return (
    <div>
      <Formik
      initialValues={
        {
          image:'',
          name:'',
          price:'',
          stock:0,
        }
      }
      validationSchema={SignInSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async(values)=>{
        await axios.post('http://localhost:2000/products',values)
        .then(res=>console.log(res.data))
        console.log(values);
      }}>

        {({errors,touched})=>(
          <div>
          <Form>
          <Field as={TextField} id="outlined-basic" label="Product image link" name='image' variant="outlined" />
          {
            errors.image && touched.image && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-17px',marginLeft:'-5%'}}>{errors.image}</div>
            )
          }

              <Field as={TextField} id="outlined-basic" label="Product Name" name='name' variant="outlined" />
              {
            errors.name && touched.name && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-17px',marginLeft:'-2%'}}>{errors.name}</div>
            )
          }
              <Field as={TextField} id="outlined-basic" label="Product Price" name='price' variant="outlined" />
              {
            errors.price && touched.price && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-17px',marginLeft:'-5%'}}>{errors.price}</div>
            )
          }
              <Field as={TextField} id="outlined-basic" label="Stock" name='stock' variant="outlined" />
              {
            errors.stock && touched.stock && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-17px',marginLeft:'-5%'}}>{errors.stock}</div>
            )
          }
              <button type='submit' className='button-71'>ADD</button>

          </Form>

          </div>
        )}

      </Formik>
    </div>
  )
}
