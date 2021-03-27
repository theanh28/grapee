import React from 'react';
import { Button, Typography } from 'antd';

import { Header } from 'antd/lib/layout/layout';
import Login from './Login/Login';

const { Title } = Typography;

const PageHeader = () => {

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title
          level={2}
          style={{
            color: '#bff542',
            marginRight: '30px',
            justifyItems: 'center',
          }}
        >
          Grapee
        </Title>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Button
            size='large'
            type='text'
            style={{
              color: '#fff',
              backgroundColor: '#000',
              borderRadius: '5px',
            }}
            onClick={() => {
              console.log('clicked');
            }}
          >
            Eat
          </Button>
          <Button
            size='large'
            type='text'
            style={{
              color: '#fff',
              backgroundColor: '#000',
              borderRadius: '5px',
            }}
            onClick={() => {
              console.log('clicked');
            }}
          >
            Sleep
          </Button>
          <Button
            size='large'
            type='text'
            style={{
              color: '#fff',
              backgroundColor: '#000',
              borderRadius: '5px',
            }}
            onClick={() => {
              console.log('clicked');
            }}
          >
            Code
          </Button>
        </div>
      </div>
      
      <Login />

    </Header>
  );
};

export default PageHeader;
