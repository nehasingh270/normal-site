import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"white"}} >
     <img src='logo192.png' alt=''  style={{height:"50px", width:"50px"}} />
      <span style={{padding:"5px 20px", fontWeight:"bold"}}>React </span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#" style={{fontWeight:"bold",padding:"5px 20px"}}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" style={{fontWeight:"bold",padding:"5px 20px"}}>
            Gallery
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{fontWeight:"bold",padding:"5px 20px",color:"white"}}
          >
            Branch
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-disabled="true" style={{fontWeight:"bold",padding:"5px 20px"}}>
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-disabled="true" style={{fontWeight:"bold",padding:"5px 20px"}}>
            Service
          </a>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success active" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}
