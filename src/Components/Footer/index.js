import React from 'react'
import ProjectLogo from '../../assets/Images/malamjabbalogo.png'
import FooterBg from '../../assets/Images/footer1.jpeg'
function Footer() {
  return (
  <div className='container-fluid align-items-center px-5' style={{backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center", backgroundImage: ` url(${
    FooterBg
  })`,height:'55vh',opacity: 0.8}}>
    <div className='row h-100 px-5'>
       <div className='w-100 d-flex align-items-center justify-content-between'>
          <img className='img-fluid' style={{width:'250px'}} src={ProjectLogo}/>
          <div className='d-flex flex-column align-items-center text-white' style={{fontSize:'16px'}}>
               <p style={{fontWeight:'700',fontSize:'16px' }}>Location</p>
               <p className='mb-2'>Hill Station</p>
               <p className='mb-2'>Malam Jaba Road,</p>
               <p className='mb-2'>Malam Jaba, Sawat.</p>
          </div>
          <div className='d-flex flex-column align-items-center text-white' style={{fontSize:'16px'}}>
               <p style={{fontWeight:'700',fontSize:'16px' }}>QUICK LINKS</p>
               <p className='mb-2'>Hill Station</p>
               <p className='mb-2'>Malam Jaba Road,</p>
               <p className='mb-2'>Malam Jaba, Sawat.</p>
          </div>
          <div className='d-flex flex-column align-items-center text-white' style={{fontSize:'16px'}}>
               <p style={{fontWeight:'700',fontSize:'16px' }}>CONCAT</p>
               <p className='mb-2'>info@malamjabbaresort.com</p>
               <p className='mb-2'>+92-302-6575400</p>
               
          </div>
        </div>  
    </div>
  </div>
  )
}

export default Footer