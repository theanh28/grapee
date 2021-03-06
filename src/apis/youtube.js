import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_BROWSER_KEY,
    part: 'snippet,contentDetails',
    maxResult: 25,
  },
});

export const handleOpenVideo = (videoId) => {
  window.open(`https://www.youtube.com/watch?v=${videoId}`);
}

/**
 * {Array} channel - channelIDs to get videos from
 * returns [{ videosId, thumbnail }]
 */
export const getVideosByChannels = async (channel, force = false) => {
  if (!localStorage.getItem('youtube') || force) {
    try {
      const promises = channel.map((cnl) =>
        youtube.get('/activities', {
          params: {
            channelId: cnl,
          },
        })
      );
      const res = await Promise.all(promises);
      localStorage.setItem('youtube', JSON.stringify(res));
      return videosExtract(res);
    } catch (error) {
      console.log('qwe get youtube activities error ', error);
    }
  } else {
    return videosExtract(JSON.parse(localStorage.getItem('youtube')));
  }
  return null;
};
/**
 * Helper function
 */
const videosExtract = (raw) => {
  // check youtubeAPI activities:list response
  console.log('qwe', raw[0]);

  const res = raw.map(({ data }) => {
    const { items } = data;

    const video = items.find((item) => {
      return item.contentDetails && item.contentDetails.upload;
    });
    // return the first activity that matches an upload video activity

    console.log('qwe', video.snippet.thumbnails.high.url);
    return {
      videoId: video.contentDetails.upload.videoId,
      thumbnail: video.snippet.thumbnails.high.url,
    };
  });

  return res;
};

export const removeVideoLocal = () => {
  localStorage.removeItem('youtube');
};
