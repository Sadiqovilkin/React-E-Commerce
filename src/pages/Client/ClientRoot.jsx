import React, { useEffect, useState } from 'react'
import ClientHeader from '../../components/Client/ClientHeader'
import { Outlet } from "react-router-dom";
import useLocalStorage from '../../hooks/useLocalStorage';
import controller from '../../services';
import { endpoints } from '../../services/constants';
const ClientRoot = () => {
  const localID = JSON.parse(localStorage.getItem('userID'));
  const[localUserID, setLocalUserID] = useLocalStorage('userID', null);
  const [userID, setUserID] = useState(localID ? localID : null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data);
    });
  }, []);
  return (
    <>
    <ClientHeader/>
    <Outlet context={[users,setUserID, setLocalUserID,]}/>
    </>
  )
}

export default ClientRoot