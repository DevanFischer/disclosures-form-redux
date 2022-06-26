import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './features/counter/counterSlice';

import './App.css';

function App() {
  const { company, user_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(`company: ${company} user_id: ${user_id}`);
    dispatch(fetchUserData(company, user_id));
  }, [dispatch, company, user_id]);

  return <div className="App"></div>;
}

export default App;
