import React from 'react';
import { Row } from 'antd';

import { Content } from 'antd/lib/layout/layout';
import VideoSlide from '../VideoSlide';

const PageContent = () => {

  return (
    <Content style={{backgroundColor: '#002766'}}>
      <Row style={{margin: '4vh', backgroundColor: '#0050b3', height: '50vh'}}>
      </Row>
      <VideoSlide />
    </Content>
  );
};

export default PageContent;
