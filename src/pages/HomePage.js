import React, { useEffect } from 'react';
import { Layout } from 'antd'

import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import { checkTrello } from '../apis/trello';

const { Footer } = Layout;

const HomePage = () => {

  useEffect(() => {
    checkTrello();
  }, [])

  return (
    <Layout style={{minHeight: '100vh', minWidth: '100vw'}}>
      <PageHeader />
      <PageContent />
      <Footer style={{backgroundColor: '#096dd9'}}>This ain't the end</Footer>
    </Layout>
  )
}

export default HomePage;