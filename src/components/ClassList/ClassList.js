import React, { Component } from "react";
import axios from "axios";
import { get } from "http";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => {
        this.setState({ students: results.data });
      });
  }
  render() {
    let displayStudents = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        {" "}
        <h3>
          {student.first_name}
          {student.last_name}{" "}
        </h3>{" "}
      </Link>
    ));
    return (
      <div className="box">
        <h1 {...this.props.match.params.class} />
        <h2>ClassList: </h2>
        {displayStudents}
      </div>
    );
  }
}
