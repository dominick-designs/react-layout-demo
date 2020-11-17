import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { getAssignments } from "../services/fakeListOfAssignments";
import { getExecutions } from "../services/fakeListOfExecutionSteps";
import { getSteps } from "../services/fakeListOfSteps";
import { getPeople } from "../services/faleListOfPeople";
import AssignmentsColumn from "./common/assignmentsColumn";
import ExecutionsColumn from "./common/executionsColumn";
import RightTabbedColumn from "./common/rightTabbedColumn";
import PeopleColumn from "./common/peopleColumn";

export default class ProcessWorkflow extends Component {
  state = {
    assignments: [],
    executions: [],
    steps: [],
    people: [],
  };

  componentDidMount() {
    this.setState({
      assignments: getAssignments(),
      executions: getExecutions(),
      steps: getSteps(),
      people: getPeople(),
    });
  }

  render() {
    const { assignments, executions, steps, people } = this.state;
    return (
      <>
        <Container className="mt-5 ">
          <Row>
            <RightTabbedColumn steps={steps} />

            <Col className="border-left border-gray pl-5">
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h2>Business process workflow</h2>
                <p>Manage assignments, responsibilities, and dates</p>
              </Col>
              
                <Row>
                  <AssignmentsColumn assignments={assignments} />
                  <PeopleColumn people={people} />
                  <ExecutionsColumn executions={executions} />
                </Row>
             
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
