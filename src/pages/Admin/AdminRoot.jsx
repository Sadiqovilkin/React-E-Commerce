import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from '../../components/Admin/AdminHeader';
import controller from '../../services';
import { endpoints } from '../../services/constants';
import useLocalStorage from '../../hooks/useLocalStorage';
const AdminRoot = () => {
  const navigate = useNavigate();
  const localID = JSON.parse(localStorage.getItem('adminID'));
  const[localAdminID, setLocalAdminID] = useLocalStorage('adminID', null);
  const [adminID, setAdminID] = useState(localID ? localID : null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data);
    });
    if (adminID===null) {
      navigate('/admin/login');
    }
  }, [adminID]);
  return (
    <>
    <AdminHeader adminID={adminID} setAdminID={setAdminID} setLocalAdminID={setLocalAdminID}/>
    <Outlet context={[users,setAdminID, setLocalAdminID,]} />
    </>
  )
}

export default AdminRoot