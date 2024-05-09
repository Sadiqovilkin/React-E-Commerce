import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from '../../components/Admin/AdminHeader';
const AdminRoot = () => {
  const navigate = useNavigate();
  const localID = JSON.parse(localStorage.getItem('adminID'));
  const [adminID, setAdminID] = useState(localID ? localID : null);

  useEffect(() => {
    // controller.getAll(endpoints.users).then((resp) => {
    //   setUsers(resp.data);
    // });
    // controller.getAll(endpoints.countries).then((resp)=>{
    //   setCountries(resp.data);
    // })
    if (adminID===null) {
      navigate('/admin/login');
    }
  }, [adminID]);
  return (
    <>
    <AdminHeader adminID={adminID} setAdminID={setAdminID}/>
    <Outlet />
    </>
  )
}

export default AdminRoot