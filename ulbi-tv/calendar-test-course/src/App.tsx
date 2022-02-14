import { Layout } from 'antd';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

export const App: React.FC = () => {
  const { setUser, setAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username') || '' } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default App;
