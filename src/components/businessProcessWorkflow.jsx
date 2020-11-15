import React, { Component } from "react";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";

import { assignments } from "../services/fakeListOfAssignments";

export default class ProcessWorkflow extends Component {
  render() {
    return (
      <>
        <Container className="mt-5 ">
          <Row>
            <Col md={4} className="pr-5">
              <Tabs defaultActiveKey="tab2" id="tabsExample" transition={false}>
                <Tab eventKey="tab1" title="Tab 1">
                  <h1>list of items here</h1>
                </Tab>
                <Tab eventKey="tab2" title="Tab 2">
                  <h1>list of items here</h1>
                </Tab>
              </Tabs>
            </Col>
            <Col md={8} className="border-left border-gray pl-5">
              <h2>Business process workflow</h2>
              <p>Manage assignments, responsibilities, and dates</p>
              <Row>
                <Col>
                  <h5>ASSIGNMENTS</h5>
                  {assignments.map(assignment => (
                    <>
                      <Card.Title key={assignment._id + assignment.label}>
                        {/* bootstrap icon */}
                        <svg
                          key={assignment._id}
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-pencil-square"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>{" "}
                        {assignment.label}
                      </Card.Title>
                      <Card bg="light" className="p-1">
                        <Card.Body>
                          <Card.Text key={assignment.label + assignment._id}>
                            {assignment.content}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </>
                  ))}
                </Col>

                <Col>
                  <h5>EXECUTION</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
