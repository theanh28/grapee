import { GoogleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GoogleLoginContext } from '../../../store/GoogleLogin';
import { removeVideoLocal } from '../../../apis/youtube';

const Login = () => {
  const { authState, startLogin, startLogout } = useContext(GoogleLoginContext);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (authState) {
      setUserInfo(authState.userInfo);
    } else {
      setUserInfo(null);
    }
  }, [authState]);

  const handleLogout = () => {
    startLogout();
    removeVideoLocal();
  }

  return (
    <>
      {userInfo ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography style={{ color: '#42f554', fontWeight: 'bold' }}>
            Hi, {userInfo.displayName}
          </Typography>
          <Button
            size='large'
            type='text'
            onClick={handleLogout}
            style={{
              color: '#c5f542',
              justifyItems: 'center',
              display: 'flex',
            }}
          >
            <LogoutOutlined style={{ fontSize: '25px' }} />
          </Button>
        </div>
      ) : (
        <Button
          size='large'
          type='text'
          onClick={startLogin}
          style={{ color: '#c5f542', justifyItems: 'center', display: 'flex' }}
        >
          Sign in with{' '}
          <GoogleOutlined style={{ color: '#42f554', fontSize: '30px' }} />
        </Button>
      )}
    </>
  );
};

export default Login;
