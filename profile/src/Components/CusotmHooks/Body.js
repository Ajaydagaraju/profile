import React from "react";

const Body = () => {
  return (
    <div className="container text-start">
      <div className="row mx-4">
        <div className="col-lg-4 col-md-5 col-sm-12 p-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=500&q=80"
              alt="profile_image"
              width="150px"
              className="img-fluid"
            />
          </div>

          <div className="border-end-3">
            <h6 className="text-secondary text-start mt-3">WORK</h6>
            <hr className="m-0" />
          </div>

          <div className="text-start me-5 mt-3">
            <div className="d-flex justify-content-between">
              <h5 className="text-dark">Spotify New York </h5>
              <div>
                <span className="badge bg-primary">Primary</span>
              </div>
            </div>

            <p className="text-secondary">170 Willam Street</p>
            <p className="text-secondary">New York NY 10038-78 212-312-51</p>
          </div>

          <div className="text-start me-5 mt-2">
            <div className="d-flex justify-content-between">
              <h5 className="text-dark">Metropolitan Museum</h5>
              <div>
                <span className="badge bg-primary">Secondary</span>
              </div>
            </div>

            <h6 className="text-secondary m-0">52S E 68th Street</h6>
            <p className="text-secondary">New York NY 10038-78 212-312-60</p>
          </div>

          <div>
            <p className="text-secondary m-0">SKILLS</p>
            <hr className="m-0" />
          </div>

          <div className="mt-2">
            <p className="fs-6 m-0">Branding</p>
            <p className="fs-6 m-0">UI/UX</p>
            <p className="fs-6 m-0">Web-design</p>
            <p className="fs-6 m-0">Packing</p>
            <p className="fs-6 m-0">Print&Demo</p>
          </div>
        </div>

        {/* SECOND DIV*** */}
        <div className="col-lg-8 col-md-7 col-sm-12  p-2 bg-light rightDiv">
          <div className="ps-4">
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  Jeremy Rose
                  <span className="fs-6 ms-3">
                    {" "}
                    <i class="fa-solid fa-location-dot text-secondary"></i> New
                    York
                  </span>
                  <div>
                    <span className=" text-primary">Product Designer</span>
                  </div>
                </h5>
              </div>

              <div className="mt-3">
                <span className="text-secondary">
                  <i class="fa-solid fa-bookmark text-secondary mx-2"></i>
                  Bookmark
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h6 className="text-secondary text-capitaliz font-weight-bold">
                Rankings
              </h6>
              <h5>
                8.6
                <i class="fa-solid fa-star text-primary ms-2"></i>
                <i class="fa-solid fa-star text-primary"></i>
                <i class="fa-solid fa-star text-primary"></i>
                <i class="fa-solid fa-star text-primary"></i>
                <i class="fa-solid fa-star text-info"></i>
              </h5>
            </div>

            <div className="mt-3">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-light ">
                  <i class="fa-solid fa-message"></i> Send Messages
                </button>
                <button type="button" className="btn bg-info text-primary mx-2">
                  <i class="fa-solid fa-check"></i> Contacts
                </button>
                <button type="button" className="btn btn-light mx-2">
                  Report User
                </button>
              </div>
            </div>

            <ul class="nav nav-tabs mt-4 text-dark">
              <li class="nav-item">
                <a class="nav-link text-dark" aria-current="page" href="#">
                  <i class="fa-solid fa-eye"></i> Timeline
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <i class="fa-solid fa-user"></i> About
                </a>
              </li>
            </ul>

            <div className="my-3">
              <span className="text-secondary text-capitaliz font-weight-bold">
                Contact Information
              </span>
              <hr className="m-0" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Phone:</h6>
                  <h6>Address:</h6>
                  <h6>E-mail: </h6>
                  <h6>Site:</h6>
                </div>

                <div>
                  <h6 className="text-primary">+1 123 456 7890</h6>
                  <h6>
                    52S E 68th Street 
                  </h6>
                  <h6 className="text-primary">hello@jeremyrose.com</h6>
                  <h6 className="text-primary">www.jeremyrose.com</h6>
                </div>
              </div>
            </div>

            <div className="my-3">
              <span className="text-secondary text-capitaliz font-weight-bold">
                Basic Information
              </span>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Birthday:</h6>
                  <h6>Gender:</h6>
                </div>

                <div>
                  <h6>June 5, 1992</h6>
                  <h6>Male</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
