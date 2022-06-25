import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './features/counter/counterSlice';

import './App.css';

function App() {
  const { company, userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData(company, userId));
  }, [company, userId, dispatch]);

  console.log(`company: ${company} userId: ${userId}`);
  return <div className="App"></div>;
}

export default App;
