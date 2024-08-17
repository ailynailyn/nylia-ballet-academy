import { React } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

import { SocialIcon } from "react-social-icons";
import NyliaButton from "./nyliaButton/NyliaButton.js";
import logoWhiteTransparent from "../assets/logos/Nylia_Logo_White_500px.png";

import "./Footer.css";

function Footer() {
  return (
    <div class="footer-container">
      <MDBFooter
        bgColor="dark"
        color="white"
        className="text-center text-lg-start"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span></span>
          </div>

          <div>
            <SocialIcon
              url="https://www.facebook.com/nyliaballetacademy/"
              network="facebook"
              bgColor="rgb(0, 0, 0, .3)"
              fgColor="white"
              style={{ marginRight: "1rem" }}
            />
            <SocialIcon
              url="https://www.instagram.com/nyliaballetacademy/"
              network="instagram"
              bgColor="rgb(0, 0, 0, .3)"
              fgColor="white"
              style={{ marginRight: "1rem" }}
            />
            <SocialIcon
              url="https://mx.pinterest.com/nyliaballetacademy/"
              network="pinterest"
              bgColor="rgb(0, 0, 0, .3)"
              fgColor="white"
            />
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <img
                  id="nyliaFooterLogo"
                  className="nylia-logo"
                  src={logoWhiteTransparent}
                  alt="Nylia Ballet Academy Logo"
                ></img>
                <p>
                  <i>
                    At Nylia Ballet Academy we focus on high quality training,
                    emphasizing character building and personal growth.
                  </i>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Academy</h6>
                <p>
                  <a href="/enroll" className="text-reset">
                    Enroll
                  </a>
                </p>
                <p>
                  <a href="/classes" className="text-reset">
                    Classes
                  </a>
                </p>
                <p>
                  <a href="/summerintensives" className="text-reset">
                    Summer Intensives
                  </a>
                </p>
                <p>
                  <a href="/scholarships" className="text-reset">
                    Scholarships
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Nylia Ballet Company
                </h6>
                <p>
                  <a href="/nyliaballetcompany" className="text-reset">
                    NBC & NBYC
                  </a>
                </p>
                <p>
                  <a href="/companydancers" className="text-reset">
                    Company Dancers
                  </a>
                </p>
                <p>
                  <a href="/performances" className="text-reset">
                    Performances
                  </a>
                </p>
                <p>
                  <a href="/gallery" className="text-reset">
                    Gallery
                  </a>
                </p>
                <p>
                  <a href="/calendar" className="text-reset">
                    Calendar
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                    />
                  </svg>
                  13340 Soleen Road, Ste D<br></br>
                  El Paso, TX 79938
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>{" "}
                  info@nyliaballetacademy.com
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>{" "}
                  +1 (915) 478-7380
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <a
            className="text-reset fw-bold"
            href="https://www.nyliaballetacademy.com/"
          >
            SCHEDULE YOUR FREE TRIAL TODAY!
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
