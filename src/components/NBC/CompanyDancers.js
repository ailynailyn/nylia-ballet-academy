import { React } from "react";

import Footer from "../../components/Footer";

import PopupModal from "../popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "../nyliaButton/NyliaButton.js";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import zairaSm from "../../assets/nbc/headshots/JPEG-300/Zaira.png";
import zairaMd from "../../assets/nbc/headshots/JPEG-768/Zaira.png";
import zairaLg from "../../assets/nbc/headshots/JPEG-1280/Zaira.png";
import zairaXL from "../../assets/nbc/headshots/JPEG-2000/Zaira.png";
import stephanieSm from "../../assets/nbc/headshots/JPEG-300/Stephanie.png";
import stephanieMd from "../../assets/nbc/headshots/JPEG-768/Stephanie.png";
import stephanieLg from "../../assets/nbc/headshots/JPEG-1280/Stephanie.png";
import stephanieXL from "../../assets/nbc/headshots/JPEG-2000/Stephanie.png";
import virginiaSm from "../../assets/nbc/headshots/JPEG-300/Virginia.png";
import virginiaMd from "../../assets/nbc/headshots/JPEG-768/Virginia.png";
import virginiaLg from "../../assets/nbc/headshots/JPEG-1280/Virginia.png";
import virginiaXL from "../../assets/nbc/headshots/JPEG-2000/Virginia.png";
import yocelynSm from "../../assets/nbc/headshots/JPEG-300/Yocelyn.png";
import yocelynMd from "../../assets/nbc/headshots/JPEG-768/Yocelyn.png";
import yocelynLg from "../../assets/nbc/headshots/JPEG-1280/Yocelyn.png";
import yocelynXL from "../../assets/nbc/headshots/JPEG-2000/Yocelyn.png";
import anaCristinaSm from "../../assets/nbc/headshots/JPEG-300/AnaCristina.png";
import anaCristinaMd from "../../assets/nbc/headshots/JPEG-768/AnaCristina.png";
import anaCristinaLg from "../../assets/nbc/headshots/JPEG-1280/AnaCristina.png";
import anaCristinaXL from "../../assets/nbc/headshots/JPEG-2000/AnaCristina.png";

import camilaSm from "../../assets/nbc/headshots/JPEG-300/Camila.png";
import camilaMd from "../../assets/nbc/headshots/JPEG-768/Camila.png";
import camilaLg from "../../assets/nbc/headshots/JPEG-1280/Camila.png";
import camilaXL from "../../assets/nbc/headshots/JPEG-2000/Camila.png";
import anahidSm from "../../assets/nbc/headshots/JPEG-300/Anahid.png";
import anahidMd from "../../assets/nbc/headshots/JPEG-768/Anahid.png";
import anahidLg from "../../assets/nbc/headshots/JPEG-1280/Anahid.png";
import anahidXL from "../../assets/nbc/headshots/JPEG-2000/Anahid.png";
import beckSm from "../../assets/nbc/headshots/JPEG-300/beck.jpg";
import beckMd from "../../assets/nbc/headshots/JPEG-768/beck.jpg";
import beckLg from "../../assets/nbc/headshots/JPEG-1280/beck.jpg";
import beckXL from "../../assets/nbc/headshots/JPEG-2000/beck.jpg";
import luisaSm from "../../assets/nbc/headshots/JPEG-300/Luisa.png";
import luisaMd from "../../assets/nbc/headshots/JPEG-768/Luisa.png";
import luisaLg from "../../assets/nbc/headshots/JPEG-1280/Luisa.png";
import luisaXL from "../../assets/nbc/headshots/JPEG-2000/Luisa.png";
import logoXL from "../../assets/logos/Nylia Company Logos/2-cropped.png";

import "./CompanyDancers.css";

function CompanyDancers() {
  const goToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(false);
  };

  return (
    <div class="companydancers-container">
      <div className="main-img-bkg" id="mission-section">
        <div className="main-title">
          <h1>COMPANY DANCERS</h1>
        </div>
        <div className="companydancers-main-box">
          <p>
            <br />
            Nylia Ballet Company inspires a vibrant community through ballet's
            transformative power. Our diverse dancers balance full-time jobs
            with professional training, sharing the beauty of dance and
            enriching the El Paso Borderland community's cultural heritage. With
            a dedication to artistic integrity, social responsibility, and
            collaboration, Nylia Ballet Company enriches the lives of our
            audience members, performers, and community alike. Together we
            create moments of beauty, inspiration, and joy that resonate far
            beyond the stage.
          </p>
          <img
            src={logoXL}
            alt="Camila Hellmuth posing for Nylia Ballet Academy Performance"
            id="companydancers-logo"
          />
        </div>
      </div>
      <div className="main-img-bkg" id="nbc-section">
        <div className="companydancers-main-box" id="companydancers">
          <h1 id="highlightTitle">NYLIA BALLET COMPANY</h1>
          <h2>
            <i>Demi-Soloists</i>
          </h2>
          <div>
            <Row xs={1} sm={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={yocelynSm}
                    srcSet={`${yocelynSm} 300w, ${yocelynMd} 768w, ${yocelynLg} 1280w, ${yocelynXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Yocelyn Salcido</Card.Title>
                    <Card.Text>
                      <i>Demi-Soloist</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={anahidSm}
                    srcSet={`${anahidSm} 300w, ${anahidMd} 768w, ${anahidLg} 1280w, ${anahidXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Anahid Aguirre</Card.Title>
                    <Card.Text>
                      <i>Demi-Soloist</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br></br>

          <br></br>
          <h1 id="highlightTitle">NYLIA BALLET COMPANY</h1>
          <h2>
            <i>Corps De Ballet</i>
          </h2>
          <div>
            <Row xs={1} sm={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={beckSm}
                    srcSet={`${beckSm} 300w, ${beckMd} 768w, ${beckLg} 1280w, ${beckXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Beck Cuellar</Card.Title>
                    <Card.Text>
                      <i>Corps De Ballet</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={luisaSm}
                    srcSet={`${luisaSm} 300w, ${luisaMd} 768w, ${luisaLg} 1280w, ${luisaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Luisa Cuellar</Card.Title>
                    <Card.Text>
                      <i>Corps De Ballet</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br></br>
          <h1 id="highlightTitle">NYLIA BALLET COMPANY</h1>
          <h2>
            <i>Apprentices</i>
          </h2>
          <div>
            <Row xs={1} sm={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={zairaSm}
                    srcSet={`${zairaSm} 300w, ${zairaMd} 768w, ${zairaLg} 1280w, ${zairaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Zaira Crisafulli</Card.Title>
                    <Card.Text>
                      <i>Apprentice</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={stephanieSm}
                    srcSet={`${stephanieSm} 300w, ${stephanieMd} 768w, ${stephanieLg} 1280w, ${stephanieXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Stephanie Lawler</Card.Title>
                    <Card.Text>
                      <i>Apprentice</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={camilaSm}
                    srcSet={`${camilaSm} 300w, ${camilaMd} 768w, ${camilaLg} 1280w, ${camilaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Camila Montelongo</Card.Title>
                    <Card.Text>
                      <i>Apprentice</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={anaCristinaSm}
                    srcSet={`${anaCristinaSm} 300w, ${anaCristinaMd} 768w, ${anaCristinaLg} 1280w, ${anaCristinaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Ana Cristina Muñetones</Card.Title>
                    <Card.Text>
                      <i>Apprentice</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={virginiaSm}
                    srcSet={`${virginiaSm} 300w, ${virginiaMd} 768w, ${virginiaLg} 1280w, ${virginiaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Virginia Rodriguez</Card.Title>
                    <Card.Text>
                      <i>Apprentice</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br></br>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CompanyDancers;
