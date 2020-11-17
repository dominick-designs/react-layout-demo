import React from "react";
import { Col, Tab, Tabs, Row, Nav } from "react-bootstrap";

export default function RightTabbedColumn({ steps }) {
  return (
    <>
      <Col md={3}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
          <Row>
            <Nav className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first" className="text-danger">
                  Tab 1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="text-danger border-bottom border-danger">
                  Tab 2
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p>Another list of items goes here</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex flex-column justify-content-md-center align-items-start vh-100">
                  {steps.map(step => (
                    <>
                      <Row
                        key={step._id}
                        className=" justify-content-md-center align-items-center"
                      >
                        <div>
                          <p className="m-3">{step.date}</p>
                        </div>
                        <div>
                          {/* placeholder image  */}
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-file-earmark-image"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12 16a2 2 0 0 0 2-2V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8zM3 2a1 1 0 0 1 1-1h5.5v2A1.5 1.5 0 0 0 11 4.5h2V10l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="m-3 align-items-">{step.task}</p>
                        </div>
                      </Row>

                      {/* divider between elements */}
                      <Row className="justify-content-center align-self-center pr-4">
                        <div
                          style={{ backgroundColor: "green", height: "10vh" }}
                          className="border border-primary border-5"
                        ></div>
                      </Row>
                    </>
                  ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </Col>
    </>
  );
}
