import React from 'react';
import auth from '../services/auth';
import { useHistory } from 'react-router-dom';

export default function Principal(){
  let history = useHistory();

  const handleLogout = () =>{
    auth.logout();
    history.push('/login');
  }
  return(
    <button onClick={handleLogout}> Deslogar </button>
  )
} 