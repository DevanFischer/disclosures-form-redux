import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useParams } from 'react-router-dom';

import { clientTokens } from './static/client/client_tokens';
import { getManyChatToken } from './utils/getManyChatToken';

import { fetchUserData } from './features/counter/counterSlice';

import './App.css';

function App() {
  const { company, userId } = useParams();

  useEffect(() => {
    fetchUserData(company, userId);
  }, [company, userId]);

  console.log(`company: ${company} userId: ${userId}`);
  return <div className="App"></div>;
}

export default App;
