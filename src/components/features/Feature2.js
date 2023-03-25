import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// Core Components

function Feature2() {
  return (
    <>
      <div className="section features-2">
        <Container>
          <Row className="align-items-center">
            <Col className="mr-auto text-left" lg="4" md="8">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                  <i className="ni ni-favourite-28"></i>
                </div>
                <h3>Awesome features</h3>
                <p>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="primary">
                          <i className="ni ni-settings-gear-65"></i>
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Carefully crafted components</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="primary">
                          <i className="ni ni-html5"></i>
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Amazing page examples</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="primary">
                          <i className="ni ni-satisfied"></i>
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Super friendly support team</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="pl-md-0" lg="8" md="12">
              <Row>
                <Col lg="4" md="4">
                  <div className="info text-left bg-info shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-satisfied text-info"></i>
                    </div>
                    <h5 className="info-title text-white">Features</h5>
                    <p className="description">
                      Stay Up-to-Date on DAOs Governance. Our platform offers
                      the latest news and updates on the DAOs governance, so you
                      can stay informed about the latest developments in the
                      industry
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-danger info-raised shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-palette text-danger"></i>
                    </div>
                    <h5 className="info-title text-white">
                      Track DAO Proposals and Grants
                    </h5>
                    <p className="description">
                      Our comprehensive tracking system allows you to monitor
                      the progress of DAO proposals and grants in real-time,
                      giving you the insight you need to make informed
                      decisions.
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-default shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-spaceship text-default"></i>
                    </div>
                    <h5 className="info-title text-white">
                      Timeline-Based Calendar
                    </h5>
                    <p className="description">
                      Our calendar feature provides a timeline-based view of
                      major DAO proposals and events, making it easy to stay
                      organized and keep track of important dates.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row style={{marginTop: '50px'}}>
                <Col lg="4" md="4" >
                  <div className="info text-left bg-primary shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-planet text-primary"></i>
                    </div>
                    <h5 className="info-title text-white">
                      Web 3.0 Job Portal
                    </h5>
                    <p className="description">
                      Our job portal connects employers with qualified
                      candidates who are passionate about Web 3.0 and
                      decentralized technologies.
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-warning info-raised shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-glasses-2 text-warning"></i>
                    </div>
                    <h5 className="info-title text-white">
                      Create Web 3.0 Events
                    </h5>
                    <p className="description">
                      Our event creation feature allows you to easily create and
                      manage Web 3.0 events, making it easier to connect with
                      like-minded individuals and stay involved in the
                      community.
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-success shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-notification-70 text-success"></i>
                    </div>
                    <h5 className="info-title text-white">
                      Profile Scoring Engine
                    </h5>
                    <p className="description">
                      Our profile scoring engine helps you identify the most
                      qualified candidates for your Web 3.0 job openings,
                      enabling faster and more efficient recruitment.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature2;
