const BackgroundVideo = () => {
  return (
    <>
        <video 
        className='absolute object-cover w-full h-full -z-40'
        autoPlay
        loop
        muted
       >
         <source src='./home_video.mp4' type='video/mp4' />
       </video>
    </>
  )
}

export default BackgroundVideo