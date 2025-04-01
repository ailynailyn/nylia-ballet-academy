import Card from "react-bootstrap/Card";

import "./TeamCard.css";

function TeamCard({ profileImg, name, position, description, logo }) {
  return (
    <div className="TeamCard mx-auto">
      <Card>
        <Card.Img variant="top" src={profileImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {logo && (
            <div id="teamCardLogo">
              <img src={logo}></img>
            </div>
          )}
        </Card.Body>
        <Card.Footer>
          <small>{position}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default TeamCard;
