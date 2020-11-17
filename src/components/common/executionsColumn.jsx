import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function ExecutionsColumn({ executions }) {
  return (
    <>
      <Col>
        <div className="d-flex flex-column align-items-center">
          <h5>EXECUTION</h5>
        </div>
        {/* map over execution steps */}
        {executions.map(exec => (
          <>
            <Form key={exec._id}>
              <Form.Label></Form.Label>
              <Form.Control as="select">
                <option>Select Team Member</option>
                <option>1-Select Team Member</option>
              </Form.Control>
              <Form.Check
                className="pt-3"
                inline
                label={`${exec.firstName} ${exec.lastName} (${exec.email})`}
                type="checkbox"
                aria-label="option 1"
              />
            </Form>
            {/* bootstrap calender icon */}
            <Container>
              <Row className="pt-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-calendar"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                </svg>

                <p className="ml-3">Due: {exec.dueDate}</p>
                <p className="ml-3">Completed: {exec.completedDate}</p>
              </Row>
            </Container>
          </>
        ))}
      </Col>
    </>
  );
}
