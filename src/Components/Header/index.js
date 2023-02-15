import React from 'react'
import mainLogo from '../../assets/Images/malamjabbalogo.png'
import mainBannerImage from '../../assets/Images/HeaderImage.jpeg'
import {GrMenu} from 'react-icons/gr'
function Header() {
  return (
    <div className='conatiner-fluid m-0 p-0 position-relative ' 
    style={{cursor:'pointer',backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",height:'110vh', backgroundImage: ` url(${mainBannerImage})`}}
    > 
     <div className='d-flex text-align-end flex-column p-3' style={{width:'35%',position:'absolute',left:10,bottom:130}}>
        <h2 className='text-light'>The Magnificent Where Nature Meets Adventure!</h2>
        <h5 className='text-light'>Plan your perfect getaway with family and friends</h5>
     </div>
    <nav className="w-100 position-absolute px-3 navbar navbar-expand-lg navbar-light bg-transparent">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img className='img-fluid' src={mainLogo} alt="" width="120" height="65" class="d-inline-block align-text-top"/>
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex align-items-center justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active fw-bold text-light" aria-current="page" href="#">STAYCATION</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link fw-bold text-light" href="#">PACKAGES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold text-light" href="#">THE SLOPE</a>
          </li>
         
        </ul>
      </div>
      <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <GrMenu color='white'/>
      </button>

<div className="w-25 border-0 offcanvas offcanvas-end bg-transparent" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
  
  </div>
  <div className="offcanvas-body">
  <ul class="bg-transparent list-group bg-transparent mt-4">
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="bg-transparent list-group-item text-uppercase text-light fw-bold">events</li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="bg-transparent list-group-item text-uppercase text-light fw-bold">A second item</li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="bg-transparent list-group-item text-uppercase text-light fw-bold">A third item</li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="bg-transparent list-group-item text-uppercase text-light fw-bold">A fourth item</li>
  <li data-bs-dismiss="offcanvas" aria-label="Close" class="bg-transparent list-group-item text-uppercase text-light fw-bold">And a fifth one</li>
</ul>
  </div>
</div>
    </div>
  </nav>
    </div>
  )
}

export default Header