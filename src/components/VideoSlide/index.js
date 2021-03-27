import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';

import { getVideosByChannels } from '../../apis/youtube';
import { Content } from 'antd/lib/layout/layout';
import { GoogleLoginContext } from '../../store/GoogleLogin'

const VideoSlide = () => {
  const { authState } = useContext(GoogleLoginContext);

  const [videos, setVideos] = useState([]);
  const [channelIDs, setChannelIDs] = useState();

  useEffect(() => {
    if (authState) {
      if (authState.userInfo && authState.userInfo.email === 'theanhvu02.101@gmail.com') {
        setChannelIDs(['UCz_cNcJzCy4asffzW5ERH1w', 'UCJ5Zbeo-XN0Un648J9foa1Q']);
      }
    } else {
      setChannelIDs(null);
    }
  }, [authState])

  useEffect(() => {
    const handleGetVideos = async () => {setVideos(await getVideosByChannels(channelIDs));}
    if (channelIDs) {
      handleGetVideos();
    } else {
      setVideos(null);
    }
    // TODO: getVideos upon channelID prop change
  }, [channelIDs]);
  return (
    <Content style={{ backgroundColor: '#002766' }}>
      <Row style={{ backgroundColor: '#003a8c', height: '20vh' }}>
        {videos
          ? videos.map((video) => (
              <Col
                span={6}
                style={{
                  backgroundColor: '#1d39c4',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  size='large'
                  onClick={() =>
                    window.open(`https://www.youtube.com/watch?v=${video}`)
                  }
                >
                  {' '}
                  VISIT{' '}
                </Button>
              </Col>
            ))
          : undefined}
      </Row>
    </Content>
  );
};

export default VideoSlide;
