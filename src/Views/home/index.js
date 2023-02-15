import React from 'react'
import RedBull from '../../assets/Images/RedbullLogo.png'
import Walls from '../../assets/Images/WallsLogo.png'
import Gorila from '../../assets/Images/GloriaLogo.png'
import NesCafe from '../../assets/Images/NescafeLogo.png'
import S1 from '../../assets/Images/slingshot.jpeg'
import A1 from '../../assets/Images/slingshot.jpeg'
import P1 from '../../assets/Images/WinterActivity.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
function Home() {
  return (
    <>
    <Activities displayType="start"/>
    <Activities displayType="end"/>
    <Activities displayType="start"/>
    <Events/>
    <Packages/>
    <AreaDetail/>
    <FooterBanner/>
    </>
  )
}

export default Home
function Activities(props){
    return(
        <div className='container-fluid px-5 pt-5 m-0 p-0' style={{cursor:'pointer',backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",height:'110vh', backgroundImage: ` url(${P1})`}}>
          <div className={`row m-0 p-0 d-flex justify-content-${props.displayType}`}>
            <div className='d-flex flex-column align-items-center justify-content-center w-25 p-2' >
               <h2 className='text-light mb-4' style={{fontSize:'24px'}}>WINTER ACTIVITIES</h2>
               <p className='text-light mb-5' style={{fontSize:'16px'}}>
               Malam Jabba Ski Resort is the only Public Ski Resort in Pakistan accessible throughout the year, even in heavy snowfall. 
                            We offer a range of exciting and fun activities to our visitors that are guaranteed to make you feel refreshed and inspire you to live fully and freely in the moment.
                             The equipment used for these activities is of premium quality as we can never compromise on the safety of our tourists. 
               </p>
               <button className='w-100 p-3 mt-3' style={{fontSize:'20px'}}>Book Activities</button>
            </div>
          </div>
        </div>
    )
}
function Events(){
    return(
        <div className="container-fluid px-5 py-5"style={{cursor:'pointer',backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", backgroundImage: ` url(${P1})`}}>
        <div className="row mx-3 gx-4">
          {
            [0,1,2].map(()=>{return(
              <div className="col-4 animate__animated animate__zoomIn animate__delay-2s">
                <div className="p-3 border bg-white">
                    <div className='border border-2 border-primary flex flex-column align-items-center justify-content-center p-3'>
                        <img className='img-fluid' src={P1} alt="test"/>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                           <h2 style={{fontSize:'24px'}}>PAST EVENT</h2>
                           <h3 style={{fontSize:'32px'}}>Food Fest</h3>
                           <p>Cuisines from all over Pakistan and a Qawwali Night</p>
                        </div>
                    </div>
                </div>
              </div>
            )})
          }
          
        </div>
      </div>
    )
}
function Packages(){
    return(
        <div className='container-fluid m-0 p-0'>
            <div className='row m-0 p-0'>
               {
                [0,1,2].map((item)=>{return(
                    <div key={item} className='col-4 m-0 p-0' style={{cursor:'pointer',backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",height:'65vh', backgroundImage: ` url(${P1})`}}>
                        <div  className='overLaying d-flex flex-column align-items-center w-100 pt-5'>
                            <div className='overLayInner d-flex w-75 flex-column align-items-center justify-content-center'>
                            <h1 className='text-light' style={{fontSize:'24px'}}>STAYCATION</h1>
                               <p className='text-light'style={{fontSize:'16px'}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
                                  sit amet metus eu, vestibulum placerat mi
                               </p>
                            </div>

                        </div>
                    </div>
                )})
               }
            </div>
            </div>
    )
}
function AreaDetail (){
    return(
       <div className='conatiner-fluid m-0 p-0'>
           <div className='row m-0 p-0'>
               <div className='col-6 border border-0 border-success m-0 p-0'>
               <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper border border-0 border-danger" 
        style={{height:'75vh'}}
      >
        {/* S1 */}
         {
            [0,1,2].map((item)=>{return(
        <SwiperSlide 
            style={{cursor:'grab',backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", backgroundImage: ` url(${S1})`}} 
           >
           <div className="d-flex h-100 w-100 align-items-center justify-content-center">
              <div className='d-flex w-50 flex-column text-dark align-items-center justify-content-center h-100'>
                <h1>
                    Anna
                </h1>
                <span className='fw-bold'>from Glasgow, Scotland</span>
                <p className='mt-2'>
                  A thirsty Crow found a Pitcher with some water in it,
                  but so little was there that, try as she might, she 
                  could not reach it with her beak, and it seemed as 
                  though she would die of thirst within sight of the 
                  remedy.
                </p>
            </div>
         </div>
     </SwiperSlide>
            )})
         }
      </Swiper>
               </div>
               {/* A1 */}
               <div className='col-6 m-0 p-0'>
                   <div className='conatiner-fluid m-0 p-0 h-100'>
                      <div className='row m-0 p-0 h-100'>
                        {
                            [{data:'malamjabbaskiresort',id:0},{data:'Malam Jabba Ski Resort',id:1},{data:'Malam Jabba',id:2},{data:'Malam Jabba Ski Resort',id:3}].map((item)=>{return(
                                <div
                                key={item.id} className='locationCard h-50 col-6 m-0 p-0'
                                style={{backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center", backgroundImage: ` url(${A1})`}}
                                >
                                    <h6 className='mx-2 position-absolute bottom-0'>{item.data}</h6>
                                </div>
                            )})
                        }
                           
                      </div>
                   </div>
               </div>
           </div>
       </div> 
    )
}
function FooterBanner(){
    return(
        <div className='conatiner-fluid m-0 px-2 py-5' style={{backgroundColor:'#094e9d'}}>
         <div className='row m-0 p-0 border border-0 border-success d-flex justify-content-between'>
            <div className='col-3 px-4 d-flex flex-column align-items-center justify-content-center border border-0 border-danger'>
                <span className='mb-3'  style={{fontSize:'1rem',color:'white'}}>
                  Sign up for our newsletter
                </span>
                <div className='d-flex flex-wrap border border-0 border-danger w-100'>
                   <input placeholder='email address' className='py-2 bg-transparent border border-2 border-light m-0'></input>
                   <button className='bg-transparent border border-2 border-light w-25 h-100 text-light'>
                    GO
                   </button>
                </div>
            </div>
            <div className='col-2 d-flex align-items-center border border-0 border-danger'>
             <img className='img-fluid' alt="" style={{width:'250px'}} src={RedBull}/>
            </div>
            <div className='col-2 d-flex align-items-center border border-0 border-danger'>
            <img className='img-fluid' alt="" style={{width:'250px'}} src={NesCafe}/>
            </div>
            <div className='col-2 d-flex align-items-center border border-0 border-danger'>
            <img className='img-fluid' alt="" style={{width:'250px'}} src={Walls}/>
            </div>
            <div className='col-2 d-flex align-items-center border border-0 border-danger'>
            <img className='img-fluid' alt="" style={{width:'250px'}} src={Gorila}/>
            </div>
         </div>
        </div>
    )
}