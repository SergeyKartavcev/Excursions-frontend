const VideoLink = ({ href }) => {
    const videoId = href.split('v=')[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        <img src={thumbnailUrl} alt='Video thumbnail' width='100%' height='100%' />
      </a>
    );
  };

  export default VideoLink;