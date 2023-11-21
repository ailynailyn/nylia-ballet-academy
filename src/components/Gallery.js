import { React } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import p1Sm from "../assets/galleryImages/BalletISm.png";
import p1Md from "../assets/galleryImages/BalletIMd.png";
import p1Lg from "../assets/galleryImages/BalletILg.png";
import p1XL from "../assets/galleryImages/BalletIXL.png";
import p2Sm from "../assets/galleryImages/CamilaSm.png";
import p2Md from "../assets/galleryImages/CamilaMd.png";
import p2Lg from "../assets/galleryImages/CamilaLg.png";
import p2XL from "../assets/galleryImages/CamilaXL.png";
import p3Sm from "../assets/galleryImages/FridaKhaloSm.png";
import p3Md from "../assets/galleryImages/FridaKhaloMd.png";
import p3Lg from "../assets/galleryImages/FridaKhaloLg.png";
import p3XL from "../assets/galleryImages/FridaKhaloXL.png";
import p4Sm from "../assets/galleryImages/FridaKahlo-2Sm.png";
import p4Md from "../assets/galleryImages/FridaKahlo-2Md.png";
import p4Lg from "../assets/galleryImages/FridaKahlo-2Lg.png";
import p4XL from "../assets/galleryImages/FridaKahlo-2XL.png";
import p5Sm from "../assets/galleryImages/HaileySm.png";
import p5Md from "../assets/galleryImages/HaileyMd.png";
import p5Lg from "../assets/galleryImages/HaileyLg.png";
import p5XL from "../assets/galleryImages/HaileyXL.png";
import p6Sm from "../assets/galleryImages/LilianiSm.png";
import p6Md from "../assets/galleryImages/LilianiMd.png";
import p6Lg from "../assets/galleryImages/LilianiLg.png";
import p6XL from "../assets/galleryImages/LilianiXL.png";
import p7Sm from "../assets/galleryImages/LuisaSm.png";
import p7Md from "../assets/galleryImages/LuisaMd.png";
import p7Lg from "../assets/galleryImages/LuisaLg.png";
import p7XL from "../assets/galleryImages/LuisaXL.png";
import p8Sm from "../assets/galleryImages/MabelSm.png";
import p8Md from "../assets/galleryImages/MabelMd.png";
import p8Lg from "../assets/galleryImages/MabelLg.png";
import p8XL from "../assets/galleryImages/MabelXL.png";
import p9Sm from "../assets/galleryImages/Yocelyn-2Sm.png";
import p9Md from "../assets/galleryImages/Yocelyn-2Md.png";
import p9Lg from "../assets/galleryImages/Yocelyn-2Lg.png";
import p9XL from "../assets/galleryImages/Yocelyn-2XL.png";
import p10Sm from "../assets/galleryImages/Yocelyn-5Sm.png";
import p10Md from "../assets/galleryImages/Yocelyn-5Md.png";
import p10Lg from "../assets/galleryImages/Yocelyn-5Lg.png";
import p10XL from "../assets/galleryImages/Yocelyn-5XL.png";
import p11Sm from "../assets/galleryImages/anahidPurpleSm.png";
import p11Md from "../assets/galleryImages/anahidPurpleMd.png";
import p11Lg from "../assets/galleryImages/anahidPurpleLg.png";
import p11XL from "../assets/galleryImages/anahidPurpleXL.png";
import p12Sm from "../assets/galleryImages/evanSittingSm.png";
import p12Md from "../assets/galleryImages/evanSittingMd.png";
import p12Lg from "../assets/galleryImages/evanSittingLg.png";
import p12XL from "../assets/galleryImages/evanSittingXL.png";
import p13Sm from "../assets/galleryImages/terePoseSm.png";
import p13Md from "../assets/galleryImages/terePoseMd.png";
import p13Lg from "../assets/galleryImages/terePoseLg.png";
import p13XL from "../assets/galleryImages/terePoseXL.png";
import p14Sm from "../assets/galleryImages/luisaPoseSm.png";
import p14Md from "../assets/galleryImages/luisaPoseMd.png";
import p14Lg from "../assets/galleryImages/luisaPoseLg.png";
import p14XL from "../assets/galleryImages/luisaPoseXL.png";
import p15Sm from "../assets/galleryImages/zoeBarreSm.png";
import p15Md from "../assets/galleryImages/zoeBarreMd.png";
import p15Lg from "../assets/galleryImages/zoeBarreLg.png";
import p15XL from "../assets/galleryImages/zoeBarreXL.png";
import p16Sm from "../assets/galleryImages/KeinaSm.png";
import p16Md from "../assets/galleryImages/KeinaMd.png";
import p16Lg from "../assets/galleryImages/KeinaLg.png";
import p16XL from "../assets/galleryImages/KeinaXL.png";
import p17Sm from "../assets/galleryImages/zoeTriangleSm.png";
import p17Md from "../assets/galleryImages/zoeTriangleMd.png";
import p17Lg from "../assets/galleryImages/zoeTriangleLg.png";
import p17XL from "../assets/galleryImages/zoeTriangleXL.png";

import "./Gallery.css";

function Gallery() {
  return (
    <div class="gallery">
      <MDBRow>
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src={p1Sm}
            srcSet={`${p1Sm} 300w, ${p1Md} 768w, ${p1Lg} 1280w, ${p1XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Ballerina posing in purple dresses"
          />

          <img
            src={p2Sm}
            srcSet={`${p2Sm} 300w, ${p2Md} 768w, ${p2Lg} 1280w, ${p2XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Camila Hellmuth posing for Nylia Ballet Academy Performance"
          />

          <img
            src={p3Sm}
            srcSet={`${p3Sm} 300w, ${p3Md} 768w, ${p3Lg} 1280w, ${p3XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Frida Kahlo performers from Nylia Ballet Academy"
          />

          <img
            src={p5Sm}
            srcSet={`${p5Sm} 300w, ${p5Md} 768w, ${p5Lg} 1280w, ${p5XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Ballerina in red dress at Nylia Ballet Academy performance"
          />

          <img
            src={p13Sm}
            srcSet={`${p13Sm} 300w, ${p13Md} 768w, ${p13Lg} 1280w, ${p13XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Ballerina posing in blue skirt for Nylia Ballet Academy"
          />

          <img
            src={p7Sm}
            srcSet={`${p7Sm} 300w, ${p7Md} 768w, ${p7Lg} 1280w, ${p7XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Luisa posing in blue tutu for Nylia Ballet Academy"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src={p9Sm}
            srcSet={`${p9Sm} 300w, ${p9Md} 768w, ${p9Lg} 1280w, ${p9XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yocelyn posing in white dress for Nylia Ballet Academy"
          />

          <img
            src={p11Sm}
            srcSet={`${p11Sm} 300w, ${p11Md} 768w, ${p11Lg} 1280w, ${p11XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Anahid posing in purple leotard for Nylia Ballet Academy"
          />

          <img
            src={p6Sm}
            srcSet={`${p6Sm} 300w, ${p6Md} 768w, ${p6Lg} 1280w, ${p6XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Ballerina posing in navy blue tutu for Nylia Ballet Academy"
          />

          <img
            src={p4Sm}
            srcSet={`${p4Sm} 300w, ${p4Md} 768w, ${p4Lg} 1280w, ${p4XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Dancers from Nylia Ballet Academy posing in front of blue curtain"
          />
          <img
            src={p16Sm}
            srcSet={`${p16Sm} 300w, ${p16Md} 768w, ${p16Lg} 1280w, ${p16XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Dancer posing in purple dress for Nylia Ballet Academy"
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src={p15Sm}
            srcSet={`${p15Sm} 300w, ${p15Md} 768w, ${p15Lg} 1280w, ${p15XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Dancer at barre during class at Nylia Ballet Academy"
          />

          <img
            src={p8Sm}
            srcSet={`${p8Sm} 300w, ${p8Md} 768w, ${p8Lg} 1280w, ${p8XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Ballerina posing in white tutu for Nylia Ballet Academy"
          />

          <img
            src={p12Sm}
            srcSet={`${p12Sm} 300w, ${p12Md} 768w, ${p12Lg} 1280w, ${p12XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boy ballet dancer posing on green stool"
          />
          <img
            src={p14Sm}
            srcSet={`${p14Sm} 300w, ${p14Md} 768w, ${p14Lg} 1280w, ${p14XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Luisa in Blue Posing at Gold Barre"
          />
          <img
            src={p10Sm}
            srcSet={`${p10Sm} 300w, ${p10Md} 768w, ${p10Lg} 1280w, ${p10XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yocelyn in white ballet dress posing with beige background"
          />
          <img
            src={p17Sm}
            srcSet={`${p17Sm} 300w, ${p17Md} 768w, ${p17Lg} 1280w, ${p17XL} 2000w`}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Dancer posing in triangle"
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Gallery;
