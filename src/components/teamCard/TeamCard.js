import Card from "react-bootstrap/Card";

import "./TeamCard.css";

function TeamCard({ profileImg, name, position, description }) {
  return (
    <div className="TeamCard mx-auto">
      <Card>
        <Card.Img variant="top" src={profileImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{position}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default TeamCard;
