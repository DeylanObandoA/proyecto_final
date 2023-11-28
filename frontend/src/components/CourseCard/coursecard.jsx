import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CourseCard.css";

function CourseCard(props) {
  return (
    <div>
      <Card className="text-center">
        {props.courses &&
          props.courses.map((course) => (
            <div className="card" key={course.id}>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">{course.registration_day}</Card.Footer>
            </div>
          ))}
      </Card>
    </div>
  );
}

export default CourseCard;
