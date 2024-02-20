import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryApi, recentPost, serviceApi } from '../Redux/productSlice';

const Services = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(serviceApi())
        dispatch(categoryApi())
        dispatch(recentPost())
    },[])
    const {services,categories,recentPosts} = useSelector((s)=>s.product)
    console.log("recent Post",recentPosts)
  return (
    <div>
      {/* Detail Start */}
      <div className="container py-5">
        <div className="row pt-5">
          <div className="col-lg-8">
            <div className="d-flex flex-column text-left mb-3">
              <p className="section-title pr-5">
                <span className="pr-2">Services Page</span>
              </p>
              <h1 className="mb-3">Services we offer</h1>
              <div className="d-flex">
                <p className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </p>
                <p className="mr-3">
                  <i className="fa fa-folder text-primary" /> Web Design
                </p>
                <p className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </p>
              </div>
            </div>
            <div className="mb-5">
              {services &&
                services.map((item) => (
                  <>
                    <h2 className="mb-4">{item.name}</h2>
                    <p>{item.details}</p>
                  </>
                ))}
            </div>
            {/* Related Post */}
            <div className="mb-5 mx-n3">
              <h2 className="mb-4 ml-3">Related Post</h2>
              <div className="owl-carousel post-carousel position-relative">
                <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img
                    className="img-fluid"
                    src="img/post-1.jpg"
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="pl-3">
                    <h5 className>Diam amet eos at no eos</h5>
                    <div className="d-flex">
                      <small className="mr-3">
                        <i className="fa fa-user text-primary" /> Admin
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-folder text-primary" /> Web Design
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-comments text-primary" /> 15
                      </small>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img
                    className="img-fluid"
                    src="img/post-2.jpg"
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="pl-3">
                    <h5 className>Diam amet eos at no eos</h5>
                    <div className="d-flex">
                      <small className="mr-3">
                        <i className="fa fa-user text-primary" /> Admin
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-folder text-primary" /> Web Design
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-comments text-primary" /> 15
                      </small>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img
                    className="img-fluid"
                    src="img/post-3.jpg"
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="pl-3">
                    <h5 className>Diam amet eos at no eos</h5>
                    <div className="d-flex">
                      <small className="mr-3">
                        <i className="fa fa-user text-primary" /> Admin
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-folder text-primary" /> Web Design
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-comments text-primary" /> 15
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment List */}
            <div className="mb-5">
              <h2 className="mb-4">3 Comments</h2>
              <div className="media mb-4">
                <img
                  src="img/user.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mr-3 mt-1"
                  style={{ width: 45 }}
                />
                <div className="media-body">
                  <h6>
                    John Doe{" "}
                    <small>
                      <i>01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                    consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
              <div className="media mb-4">
                <img
                  src="img/user.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mr-3 mt-1"
                  style={{ width: 45 }}
                />
                <div className="media-body">
                  <h6>
                    John Doe{" "}
                    <small>
                      <i>01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                    consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-light">Reply</button>
                  <div className="media mt-4">
                    <img
                      src="img/user.jpg"
                      alt="Image"
                      className="img-fluid rounded-circle mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        John Doe{" "}
                        <small>
                          <i>01 Jan 2045 at 12:00pm</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum. Gubergren clita
                        aliquyam consetetur, at tempor amet ipsum diam tempor at
                        sit.
                      </p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment Form */}
            <div className="bg-light p-5">
              <h2 className="mb-4">Leave a comment</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="url" className="form-control" id="website" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group mb-0">
                  <input
                    type="submit"
                    defaultValue="Leave Comment"
                    className="btn btn-primary px-3"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            {/* Author Bio */}
            {/* <div className="d-flex flex-column text-center bg-primary rounded mb-5 py-5 px-4">
              <img
                src="img/user.jpg"
                className="img-fluid rounded-circle mx-auto mb-3"
                style={{ width: 100 }}
              />
              <h3 className="text-secondary mb-3">John Doe</h3>
              <p className="text-white m-0">
                Conset elitr erat vero dolor ipsum et diam, eos dolor lorem
                ipsum, ipsum ipsum sit no ut est. Guber ea ipsum erat kasd amet
                est elitr ea sit.
              </p>
            </div> */}
            {/* Search Form */}
            <div className="mb-5">
              <form action>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Keyword"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            {/* Category List */}
            <div className="mb-5">
              <h2 className="mb-4">Categories</h2>
              <ul className="list-group list-group-flush">
                {categories &&
                  categories.map((item) => (
                    <>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <a href>{item.category}</a>
                        {/* <span className="badge badge-primary badge-pill">
                          150
                        </span> */}
                      </li>
                    </>
                  ))}
              </ul>
            </div>
            {/* Single Image */}
            <div className="mb-5">
              <img src="img/blog-1.jpg" alt className="img-fluid rounded" />
            </div>
            {/* Recent Post */}
            <div className="mb-5">
              <h2 className="mb-4">Recent Post</h2>
              {recentPosts && recentPosts.map((item)=>(
                
                <>
                    <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                <img
                  className="img-fluid"
                  src="img/post-1.jpg"
                  
                  style={{ width: 80, height: 80 }}
                />
                <div className="pl-3">
                  <h5 className>{item.title}</h5>
                  <div className="d-flex">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                </div>
              </div>
                </>
              ))}
              <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                <img
                  className="img-fluid"
                  src="img/post-1.jpg"
                  style={{ width: 80, height: 80 }}
                />
                <div className="pl-3">
                  <h5 className>Diam amet eos at no eos</h5>
                  <div className="d-flex">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary" /> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary" /> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary" /> 15
                    </small>
                  </div>
                </div>
              </div>
      
            </div>
            {/* Single Image */}
            <div className="mb-5">
              <img src="img/blog-2.jpg" alt className="img-fluid rounded" />
            </div>
            {/* Tag Cloud */}
            <div className="mb-5">
              <h2 className="mb-4">Tag Cloud</h2>
              <div className="d-flex flex-wrap m-n1">
                <a href className="btn btn-outline-primary m-1">
                  Design
                </a>
                <a href className="btn btn-outline-primary m-1">
                  Development
                </a>
                <a href className="btn btn-outline-primary m-1">
                  Marketing
                </a>
                <a href className="btn btn-outline-primary m-1">
                  SEO
                </a>
                <a href className="btn btn-outline-primary m-1">
                  Writing
                </a>
                <a href className="btn btn-outline-primary m-1">
                  Consulting
                </a>
              </div>
            </div>
            {/* Single Image */}
            <div className="mb-5">
              <img src="img/blog-3.jpg" alt className="img-fluid rounded" />
            </div>
            {/* Plain Text */}
            <div>
              <h2 className="mb-4">Plain Text</h2>
              Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea
              est aliquyam dolor et. Et no consetetur eos labore ea erat
              voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos
              tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod.
            </div>
          </div>
        </div>
      </div>
      {/* Detail End */}
      {/* Footer Start */}
      <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a
              href
              className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
              style={{ fontSize: 40, lineHeight: 40 }}
            >
              <i className="flaticon-043-teddy-bear" />
              <span className="text-white">KidKinder</span>
            </a>
            <p>
              Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
              dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet
              elitr stet diam duo eos rebum ipsum diam ipsum elitr.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: 38, height: 38 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Get In Touch</h3>
            <div className="d-flex">
              <h4 className="fa fa-map-marker-alt text-primary" />
              <div className="pl-3">
                <h5 className="text-white">Address</h5>
                <p>123 Street, New York, USA</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-envelope text-primary" />
              <div className="pl-3">
                <h5 className="text-white">Email</h5>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-phone-alt text-primary" />
              <div className="pl-3">
                <h5 className="text-white">Phone</h5>
                <p>+012 345 67890</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                About Us
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Classes
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Teachers
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2" />
                Our Blog
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <form action>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0 py-4"
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block border-0 py-3"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="container-fluid pt-5"
          style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }}
        >
          <p className="m-0 text-center text-white">
            ©{" "}
            <a className="text-primary font-weight-bold" href="#">
              Your Site Name
            </a>
            . All Rights Reserved.
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed by{" "}
            <a
              className="text-primary font-weight-bold"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary p-3 back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
}

export default Services