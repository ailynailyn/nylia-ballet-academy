import { React } from "react";

import Footer from "../../components/Footer";

import PopupModal from "../popupModal/PopupModal";
import { SocialIcon } from "react-social-icons";
import NyliaButton from "../nyliaButton/NyliaButton.js";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import zairaSm from "../../assets/nbc/headshots/JPEG-300/zaira.jpg";
import zairaMd from "../../assets/nbc/headshots/JPEG-768/zaira.jpg";
import zairaLg from "../../assets/nbc/headshots/JPEG-1280/zaira.jpg";
import zairaXL from "../../assets/nbc/headshots/JPEG-2000/zaira.jpg";

import tiffinySm from "../../assets/nbc/headshots/JPEG-300/tiffiny.jpg";
import tiffinyMd from "../../assets/nbc/headshots/JPEG-768/tiffiny.jpg";
import tiffinyLg from "../../assets/nbc/headshots/JPEG-1280/tiffiny.jpg";
import tiffinyXL from "../../assets/nbc/headshots/JPEG-2000/tiffiny.jpg";
import yocelynSm from "../../assets/nbc/headshots/JPEG-300/yocelyn.jpg";
import yocelynMd from "../../assets/nbc/headshots/JPEG-768/yocelyn.jpg";
import yocelynLg from "../../assets/nbc/headshots/JPEG-1280/yocelyn.jpg";
import yocelynXL from "../../assets/nbc/headshots/JPEG-2000/yocelyn.jpg";
import shelbySm from "../../assets/nbc/headshots/JPEG-300/shelby2.png";
import shelbyMd from "../../assets/nbc/headshots/JPEG-768/shelby2.png";
import shelbyLg from "../../assets/nbc/headshots/JPEG-1280/shelby2.png";
import shelbyXL from "../../assets/nbc/headshots/JPEG-2000/shelby2.png";
import melinaSm from "../../assets/nbc/headshots/JPEG-300/melina.png";
import melinaMd from "../../assets/nbc/headshots/JPEG-768/melina.png";
import melinaLg from "../../assets/nbc/headshots/JPEG-1280/melina.png";
import melinaXL from "../../assets/nbc/headshots/JPEG-2000/melina.png";

import vivianSm from "../../assets/nbc/headshots/JPEG-300/vivian.png";
import vivianMd from "../../assets/nbc/headshots/JPEG-768/vivian.png";
import vivianLg from "../../assets/nbc/headshots/JPEG-1280/vivian.png";
import vivianXL from "../../assets/nbc/headshots/JPEG-2000/vivian.png";

import camilaSm from "../../assets/nbc/headshots/JPEG-300/camila.jpg";
import camilaMd from "../../assets/nbc/headshots/JPEG-768/camila.jpg";
import camilaLg from "../../assets/nbc/headshots/JPEG-1280/camila.jpg";
import camilaXL from "../../assets/nbc/headshots/JPEG-2000/camila.jpg";
import anahidSm from "../../assets/nbc/headshots/JPEG-300/anahid.jpg";
import anahidMd from "../../assets/nbc/headshots/JPEG-768/anahid.jpg";
import anahidLg from "../../assets/nbc/headshots/JPEG-1280/anahid.jpg";
import anahidXL from "../../assets/nbc/headshots/JPEG-2000/anahid.jpg";
import rinaSm from "../../assets/nbc/headshots/JPEG-300/rina.jpg";
import rinaMd from "../../assets/nbc/headshots/JPEG-768/rina.jpg";
import rinaLg from "../../assets/nbc/headshots/JPEG-1280/rina.jpg";
import rinaXL from "../../assets/nbc/headshots/JPEG-2000/rina.jpg";
import beckSm from "../../assets/nbc/headshots/JPEG-300/beck.jpg";
import beckMd from "../../assets/nbc/headshots/JPEG-768/beck.jpg";
import beckLg from "../../assets/nbc/headshots/JPEG-1280/beck.jpg";
import beckXL from "../../assets/nbc/headshots/JPEG-2000/beck.jpg";
import luisaSm from "../../assets/nbc/headshots/JPEG-300/luisa.png";
import luisaMd from "../../assets/nbc/headshots/JPEG-768/luisa.png";
import luisaLg from "../../assets/nbc/headshots/JPEG-1280/luisa.png";
import luisaXL from "../../assets/nbc/headshots/JPEG-2000/luisa.png";
import luzSm from "../../assets/nbc/headshots/JPEG-300/luz.jpg";
import luzMd from "../../assets/nbc/headshots/JPEG-768/luz.jpg";
import luzLg from "../../assets/nbc/headshots/JPEG-1280/luz.jpg";
import luzXL from "../../assets/nbc/headshots/JPEG-2000/luz.jpg";
// import chelseaSm from "../../assets/nbc/headshots/JPEG-300/chelsea.jpg";
// import chelseaMd from "../../assets/nbc/headshots/JPEG-768/chelsea.jpg";
// import chelseaLg from "../../assets/nbc/headshots/JPEG-1280/chelsea.jpg";
// import chelseaXL from "../../assets/nbc/headshots/JPEG-2000/chelsea.jpg";
import tereSm from "../../assets/nbc/headshots/JPEG-300/tere.jpg";
import tereMd from "../../assets/nbc/headshots/JPEG-768/tere.jpg";
import tereLg from "../../assets/nbc/headshots/JPEG-1280/tere.jpg";
import tereXL from "../../assets/nbc/headshots/JPEG-2000/tere.jpg";
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
            <i>Soloists</i>
          </h2>
          <div>
            <Row xs={1} sm={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={tiffinySm}
                    srcSet={`${tiffinySm} 300w, ${tiffinyMd} 768w, ${tiffinyLg} 1280w, ${tiffinyXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Tiffiny Stevens</Card.Title>
                    <Card.Text>
                      <i>Soloist</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
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
                      <i>Soloist</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <br></br>
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
                    src={shelbySm}
                    srcSet={`${shelbySm} 300w, ${shelbyMd} 768w, ${shelbyLg} 1280w, ${shelbyXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Shelby Buxton</Card.Title>
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
                    src={camilaSm}
                    srcSet={`${camilaSm} 300w, ${camilaMd} 768w, ${camilaLg} 1280w, ${camilaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Camila Hellmuth</Card.Title>
                    <Card.Text>
                      <i>Demi-Soloist</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Isabel Robinson</Card.Title>
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
            <i>Corps De Ballet</i>
          </h2>
          <div>
            <Row xs={1} sm={2} className="g-4">
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
                      <i>Corps De Ballet</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={rinaSm}
                    srcSet={`${rinaSm} 300w, ${rinaMd} 768w, ${rinaLg} 1280w, ${rinaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Rina Alderete</Card.Title>
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

              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src={luzSm}
                    srcSet={`${luzSm} 300w, ${luzMd} 768w, ${luzLg} 1280w, ${luzXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Luz Gonzalez</Card.Title>
                    <Card.Text>
                      <i>Corps De Ballet</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Chelsea Shugert</Card.Title>
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
                    src={tereSm}
                    srcSet={`${tereSm} 300w, ${tereMd} 768w, ${tereLg} 1280w, ${tereXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Tere Castellanos</Card.Title>
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
                    src={melinaSm}
                    srcSet={`${melinaSm} 300w, ${melinaMd} 768w, ${melinaLg} 1280w, ${melinaXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Melina Garcia</Card.Title>
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
                    src={vivianSm}
                    srcSet={`${vivianSm} 300w, ${vivianMd} 768w, ${vivianLg} 1280w, ${vivianXL} 2000w`}
                  />
                  <Card.Body>
                    <Card.Title>Vivian Trincado</Card.Title>
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
