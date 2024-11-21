import React from 'react'

export default function Slider() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-8 p-0'>
{/* slider code */}
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="p1.jpg" className="d-block w-100" alt="..."  style={{height:'400px'}} />
    </div>
    <div className="carousel-item">
      <img src="p2.webp" className="d-block w-100" alt="..."  style={{height:'400px'}} />
    </div>
    <div className="carousel-item">
      <img src="p3.webp" className="d-block w-100" alt="..."  style={{height:'400px'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </div>

        <div className='col-sm-4' style={{border:"5px solid red"}}>
            <div id='A' >News Letter</div>
            <br></br>
            <br></br>
            <marquee behavior="alternate"><a style={{color:"blue"}}>Best IT Company in Lucknow</a></marquee>
            <br></br>
            <br></br>
            <marquee behavior="alternate"><a style={{color:"blue"}}>Best IT Company in Lucknow</a></marquee>
            <br></br>
            <br></br>
            <marquee behavior="alternate"><a style={{color:"blue"}}>Best IT Company in Lucknow</a></marquee>
            <br></br>
            <br></br>
            <marquee behavior="alternate"><a style={{color:"blue"}}>Best IT Company in Lucknow</a></marquee>
            <br></br>
            <br></br>
            <marquee behavior="alternate"><a style={{color:"blue"}}>Best IT Company in Lucknow</a></marquee>
        </div>




      </div>
    </div>
  )
}
