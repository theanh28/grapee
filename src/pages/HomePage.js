import React from 'react';
import { Layout } from 'antd'

import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';

const { Footer } = Layout;

const HomePage = () => {

  return (
    <Layout style={{minHeight: '100vh', minWidth: '100vw'}}>
      <PageHeader />
      <PageContent />
      <Footer style={{backgroundColor: '#096dd9'}}>This ain't the end</Footer>
    </Layout>
  )
}

export default HomePage;