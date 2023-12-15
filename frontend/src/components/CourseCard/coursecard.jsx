import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = (props) => {

  return (
    <div className="course-card-container">
      {props.courses && props.courses.map((course) => (
        <Card key={course.id} className="text-center">
          <Card.Header>
            <Link to={`/edit-course/${course.id}`} className="links" >
              Edit
            </Link>
            <Link to={`/delete-course/${course.id}`} className="links" >
              Delete
            </Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Link to={`/course/${course.id}`} className="btnshow" >
              Ver información completa
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">{course.registration_day}</Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default CourseCard;