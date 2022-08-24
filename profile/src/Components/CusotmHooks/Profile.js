import React from "react";
import Iconimg from '../../Images/profile.jpg'


const Profile = () => {
  return (
    <div className="">
      {/* NAVBAR  */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
            <div className="d-flex">
              <a className="navbar-brand mt-2"  href="#">
            <i class="fa-solid fa-droplet text-primary  "> <span className="text-dark" style={{fontSize:'14px'}}> KodeColor  </span></i>
                
              </a>
              <nav className="navbar navbar-light bg-light ms-5">
                <div className="container-fluid">
                  <form className="d-flex">
                    <input
                      className="form-control me-2 formInput"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </nav>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Find People
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Messages <span className="badge bg-info text-primary ">4</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Conacts
                  </a>
                </li>
                <li className="nav-item">
                  <img src={Iconimg} alt="Profile" style={{ width:"30px", height:"30px", borderRadius:"50%" }} /> 
                  <div style={{ position:"absolute", marginTop:"-30px", marginLeft:"20px", width:"10px", height:'10px', borderRadius:"50%", border:"1px solid white", backgroundColor:"lightgreen", display:'flex', alignItem:'center', justifyContent:'center' }} ></div>    
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Profile;
