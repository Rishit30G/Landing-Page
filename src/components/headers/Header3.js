import React, { useState } from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";


// Core Components


function Header3() {
  const texts = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(texts[currentIndex]);
  function handleClick() {
    const nextIndex = (currentIndex + 1) % texts.length;
    setCurrentIndex(nextIndex);
    setText(texts[nextIndex]);
  }
  

  React.useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 0,
      perView: 3.6,
      autoplay: 5000
    }).mount();
  }, []);
 
  return (
    <>
      <header className="header-3 bg-dark" >
      <div style={{marginTop: '70px'}}>
        {/* <Navbar className="navbar-transparent navbar-absolute" expand="lg" style={{marginTop: '70px'}}>
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Creative Tim
              </NavbarBrand>
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#example-header-3"
                data-toggle="collapse"
                id="example-header-3"
                type="button"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            
            <UncontrolledCollapse
              id="example-header-3"
              navbar
              toggler="#example-header-3"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Argon <span>Design System PRO</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button
                      aria-controls="navigation-index"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#example-header-3"
                      data-toggle="collapse"
                      id="example-header-3"
                      type="button"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar> */}
        <div className="page-header header-filter">
          <div className="content-center">
            <Row>
              <Col className="mx-auto positioned" lg="5" md="8" xs="12">
                <h4 className="title text-white text-uppercase ml-0">
                  Build stunning websites and apps
                </h4>
                {/* <div className="info info-horizontal ml-0">
                  <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                    <i className="ni ni-active-40"></i>
                  </div>
                  <div className="description">
                    <h6 className="info-title text-uppercase text-white pl-0">
                      Connect with founders
                    </h6>
                    <p className="text-white opacity-8">
                      As we live, our hearts turn colder. Cause pain is what we
                      go through as we become older and we get insulted
                    </p>
                  </div>
                </div> */}
                {/* <div className="info info-horizontal ml-0">
                  <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                    <i className="ni ni-trophy"></i>
                  </div>
                  <div className="description">
                    <h6 className="info-title text-uppercase text-white pl-0">
                      Learn from experts
                    </h6>
                    <p className="text-white opacity-8">
                      We get back stabbed by friends. It becomes harder for us
                      to give others a hand. We get our heart broken by people
                      we love.
                    </p>
                  </div> */}
                {/* </div> */}
                <div className="info info-horizontal ml-0">
                  <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                    <i className="ni ni-paper-diploma"></i>
                  </div>
                  <div className="description">
                    <h6 className="info-title text-uppercase text-white pl-0">
                      Lorem Ipsum 
                    </h6>
                    <p className="text-white opacity-8">
                    {text}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="12">
                <div className="glide">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/theme/victor-garcia.jpg")}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/theme/sacha-styles.jpg")}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/theme/doyoun-seo.jpg")}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/theme/sofia-kuniakina.jpg")}
                          width="450"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="500"
                          src={require("assets/img/theme/ayo-ogunseinde.jpg")}
                          width="450"
                        ></img>
                      </li>
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls" onClick={handleClick}>
                    <button
                      className="glide__arrow glide__arrow--left"
                      data-glide-dir="<"
                    >
                    <i className="ni ni-bold-left" ></i>
                    </button>
                    <button
                      className="glide__arrow glide__arrow--right"
                      data-glide-dir=">"
                    >
                    <i className="ni ni-bold-right"></i>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        </div>
      </header>
     
    </>
  );
 }

export default Header3;
