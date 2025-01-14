import React from 'react';

const YouTubeVideo = () => {
  const videoId = 'Fr5lt86dPyU'; 

  return (
    <div className='youtube-video'>
      <iframe
        width="1530"
        height="630"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;