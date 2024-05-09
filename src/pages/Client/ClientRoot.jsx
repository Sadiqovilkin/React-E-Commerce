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
  const [data, setData] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.users).then((resp) => {
      setUsers(resp.data);
    });
    controller.getAll(endpoints.products).then((resp) => {
      setData(resp.data);
    });
  }, []);
  return (
    <>
    <ClientHeader userID={userID} setUserID={setUserID} setLocalUserID={setLocalUserID}/>
    <Outlet context={[users,setUserID, setLocalUserID,data]}/>
    </>
  )
}

export default ClientRoot