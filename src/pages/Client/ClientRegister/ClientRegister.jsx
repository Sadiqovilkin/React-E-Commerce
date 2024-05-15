import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import UsersSchema from '../../../validations/user.validation'
import Users from '../../../classes/users.class'
import controller from '../../../services'
import { endpoints } from '../../../services/constants'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'

const ClientRegister = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
      confirmPassword:"",
      email:'',
      profileImg:'',
      balance:''
    },
    onSubmit: values =>{
      console.log(values);
      const newUser = new Users(values.username,values.password,values.email,values.profileImg,values.balance)
      controller.post(endpoints.users,newUser)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User succses Register",
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        navigate("/login");
      })

    },
    validationSchema:UsersSchema
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
          value={formik.values.balance}
          name="balance"
          onChange={formik.handleChange}
          id="balance"
          type="text"
          label="Balance"
          variant="outlined"
          className='form-control'
        />
        {formik.errors.balance && <span style={{color:'red'}}>{formik.errors.balance}</span>}

        <TextField
          value={formik.values.profileImg}
          name="profileImg"
          onChange={formik.handleChange}
          id="profileImg"
          type="text"
          label="Profile İmg"
          variant="outlined"
          className='form-control'
        />
        {formik.errors.profileImg && <span style={{color:'red'}}>{formik.errors.profileImg}</span>}

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

        <TextField
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          label="confirm Password"
          variant="outlined"
          className='form-control'
        />
        {formik.errors.confirmPassword && <span style={{color:'red'}}>{formik.errors.confirmPassword}</span>}


        <Button variant="contained" type="submit" color="error">
          Sign In
        </Button>
      </form>
      </div>
    </div>
   </div>
  )
}

export default ClientRegister