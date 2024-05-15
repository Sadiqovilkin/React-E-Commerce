import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
// import { toast } from 'react-toastify'
import UserLoginSchema from '../../../validations/userlogin.validation'
import Swal from 'sweetalert2'

const ClientLogin = () => {
  const [users,setUserID, setLocalUserID,] = useOutletContext();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
      email:'',
    },
    onSubmit: values =>{
      console.log(values);
      const foundUsers = users.data.find(
        (x) =>
          x.username == values.username &&
          x.email == values.email &&
          x.password == values.password &&
          x.role == "client"
      );
      if (foundUsers) {
        setUserID(foundUsers._id);
        setLocalUserID(foundUsers._id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User succses login",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "some problem ",
          showConfirmButton: false,
          timer: 1500
        });
        values.username = '';
        values.email = '';
        values.password = '';
      }
    },
    validationSchema:UserLoginSchema
  })

  return (
   <div className="container">
    <div className="row justify-content-center ">
      <div className="col-lg-6">
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "100px",
        }}
      >
        <TextField
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          id="username"
          type="text"
          label="Username"
          variant="outlined"
          className='form-control'
        />
        {formik.errors.username && <span style={{color:'red'}}>{formik.errors.username}</span>}

        <TextField
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          id="email"
          type="text"
          label="Email"
          variant="outlined"
          className='form-control'
        />
        {formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>}

        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
          type="password"
          label="password"
          variant="outlined"
          className='form-control'
        />
        {formik.errors.password && <span style={{color:'red'}}>{formik.errors.password}</span>}



        <Button variant="contained" type="submit" color="error">
          Sign In
        </Button>
      </form>
      </div>
    </div>
   </div>
  )
}

export default ClientLogin