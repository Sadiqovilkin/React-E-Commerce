import React from 'react'
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import {  useNavigate, useOutletContext } from 'react-router-dom';
import AdminLoginSchema from '../../../validations/admin.validation';
const Login = () => {
  const [users, setAdminID, setLocalAdminID] = useOutletContext();
  const navigate = useNavigate();
  const formik=useFormik({
    initialValues:{
      username:'',
      password:''
    },
    onSubmit: values => {
      console.log(users);
      const foundAdmin = users.data.find(
        (x) =>x.username == values.username &&x.password == values.password && x.role == "admin"
        
      );
      if (foundAdmin) {
        setAdminID(foundAdmin._id);
        setLocalAdminID(foundAdmin._id);
        toast.success("Admin logged in!",{
          autoClose: 1500
        })
        setTimeout(() => {
          navigate('/admin');
        }, 1500);
      } else {
        toast.error("username or password is incorrect!");
        values.username = '';
        values.password = '';
      }
    },
    validationSchema: AdminLoginSchema
    
  })
  return (
    <>
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-6">
        <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "200px",
        }}
      >
        <TextField
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          id="outlined-basic"
          type="text"
          label="admin username"
          variant="outlined"
        />
        {formik.errors.username && <span style={{color:'red'}}>{formik.errors.username}</span>}
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="outlined-basic"
          type="password"
          label="admin password"
          variant="outlined"
        />
        {formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>}
        <Button variant="contained" type="submit" color="error">
          Sign In
        </Button>
      </form>
      <ToastContainer />
    </>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login