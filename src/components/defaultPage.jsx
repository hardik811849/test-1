const DefaultPage = () => {
    const videoUrl =
      'https://all-sites-under.s3.us-east-2.amazonaws.com/hydrogen196/h2_homepagevideo.mov' // Replace with the actual video URL
  
    const containerStyle = {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden'
    }
  
    const videoStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1
    }
  
    const blurOverlayStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -200%)',
      width: '40%', // Adjust the size of the blur div as needed
      height: '10%', // Adjust the size of the blur div as needed
      background: 'rgba(0, 0, 0, 0.4)', // Darker background color with alpha
      backdropFilter: 'blur(8px)', // Adjust blur intensity as needed
      zIndex: -1
    }
  
    const borderStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '6px solid rgba(255, 255, 255, 0.5)', // Semi-transparent white border
      boxSizing: 'border-box',
      zIndex: -1
    }
  
    const contentStyle = {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      transform: 'translate(0%, -290%)',
      fontFamily: 'Arial, sans-serif', // Set your preferred font-family
      color: '#fff', // Set text color
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
    };
  
    return (
      <div style={containerStyle}>
        <video style={videoStyle} autoPlay loop muted>
          <source src={videoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div style={blurOverlayStyle}></div>
        <div style={borderStyle}></div>
        <div style={contentStyle}>
          <h1>Revolutionary project coming soon!</h1>
        </div>
      </div>
    )
  }

export default DefaultPage;