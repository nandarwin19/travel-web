const ContactBackgroundVideo = () => {
  return (
    <>
        <video 
        className='absolute object-cover w-full h-full -z-40'
        autoPlay
        loop
        muted
       >
         <source src='./ocean.mp4' type='video/mp4' />
       </video>
    </>
  )
}

export default ContactBackgroundVideo