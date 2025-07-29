import { React } from "react";
import TeamCard from "../components/teamCard/TeamCard";
import Footer from "../components/Footer";
import ailyn from "../assets/nbc/headshots/JPEG-2000/ailyn.png";
import luisaXL from "../assets/nbc/headshots/JPEG-2000/Luisa-bw.png";
import anahidXL from "../assets/nbc/headshots/JPEG-2000/anahid.jpg";
import yocelynXL from "../assets/nbc/headshots/JPEG-2000/yocelyn.jpg";
import camilaXL from "../assets/nbc/headshots/JPEG-2000/camila.jpg";
import beckXL from "../assets/nbc/headshots/JPEG-2000/beck.jpg";
import claraXL from "../assets/nbc/headshots/JPEG-2000/clara2.png";
import ABTLogo from "../assets/American_Ballet_Theatre_NTC_logo.png";

import "./Team.css";
import CardGroup from "react-bootstrap/CardGroup";

function Team() {
  // https://nicepage.com/ht/546181/successful-team-html-template

  var memberInfo = {
    ailyn: {
      name: "AILYN AGUIRRE",
      profileImg: ailyn,
      position: "Executive Director",
      description: `Ailyn began her ballet training at eleven years old under Andrée
      Harper and Ouisa Davis. After graduating from the University of
      Texas in Austin, Ailyn became a Software Engineer. After teaching
      and creating choreography at multiple studios throughout Texas, she
      returned to her native El Paso roots and founded Nylia Ballet
      Academy to provide an equal opportunity for anyone in the community
      to pursue their dreams in dance. Ailyn is an ABT® Certified Teacher, who has successfully completed the ABT® Teacher Training Intensive in Pre-Primary through Level 5 of the ABT® National Training Curriculum.`,
    },

    beck: {
      name: "BECK CUELLAR",
      profileImg: beckXL,
      position: "Executive Assistant & Production Assistant",
      description:
        "Beck, a proud El Paso native, is currently pursuing a BFA with a focus on Painting and a minor in Graphic Design at UTEP. Following high school, Beck was offered a soccer scholarship at Navarro College and also secured a prestigious local scholarship from El Paso. With a diverse background in various job fields, Beck has diligently honed their artistic skills while also making a name for themselves as a local vegan cook, actively seeking to expand their culinary expertise. Securing multiple scholarships and furthering their art techniques, Beck joined Nylia Ballet Academy as a Production Assistant, whose works include personally crafting the Cinderella set. In addition to serving as the house artist, they are a valuable member of the Nylia Dancewear team, contributing to the creation of stunning attire. Furthermore, Beck has attained a Technical Diploma in Medical Assistance and completed their phlebotomy certification through a Texas-accredited school, showcasing their versatility beyond artistic pursuits. Known for their multitude of talents and unwavering passion for art, Beck consistently brings a burst of creativity to Nylia Ballet's showcases.",
    },
    anahid: {
      name: "ANAHID AGUIRRE",
      profileImg: anahidXL,
      position: "Instructor",
      description:
        "Anahid Aguirre is a full-time dancer and professional nail artist, the proud owner of ADA Nail Salon, located right next to us! She began her dance journey at the age of 4 under the guidance of Andree Harper. Today, Anahid continues to pursue her passion for dance as a Corps de Ballet member with the Nylia Ballet Company. She has been part of Nylia Ballet since its inception, and is thrilled to contribute to the growth and artistry of the company. In addition to her dedication to dance, Anahid is also studying Architecture at EPCC, showcasing her multifaceted talents and strong work ethic. As a business owner and artist, she loves to share the beauty of ballet and nail artistry with others, inspiring those around her to find joy and creativity in the arts. Her mission is to inspire and uplift, just as she has been inspired by her mentors and fellow artists throughout her journey.",
    },
    luisa: {
      name: "LUISA CUELLAR",
      profileImg: luisaXL,
      position: "Instructor",
      description:
        "Luisa is a talented Corps de Ballet member with the Nylia Ballet Company and is currently pursuing a degree in Computer Science at EPCC. She has been training at Nylia Ballet Academy since its opening and is passionate about sharing the beauty of ballet with the El Paso community. Her love for the arts began long before ballet, with a background in musicals and theatre productions that ultimately led her to discover her true calling in dance. Luisa’s dedication to both her academic and artistic pursuits reflects her strong work ethic and her desire to inspire others through the power of movement and creativity.",
    },
    clara: {
      name: "CLARA FRAGA",
      profileImg: claraXL,
      position: "Instructor",
      description: `Clara Fraga is a dance teacher, Pilates instructor, and choreographer passionate about connecting people to the joy of movement in all forms throughout El Paso, TX. Clara’s dance training began in classical ballet under the direction of Andrée Harper, instilling her with discipline, perseverance, and a drive for excellence. As an Eastwood HS Trooperette, Clara discovered her passion for teaching and choreographing.  These pursuits led her to Texas Christian University’s School for Classical & Contemporary Dance, where she studied under various dance merit and academic achievement scholarships, as a Hispanic Scholarship Fund Scholar, and part of the John V. Roach Honors College.  While at TCU, Clara performed as “Silver” in Jewels Pas de Quarte in The Sleeping Beauty (excerpts), Swan Lake (Act II), and in original works by Keith Saunders, Rubén Gerding, and Peter Pucci.  In May 2023, Clara received a BFA in Ballet and a BA in English with Honors Laureate Distinction, in addition to a 700-hour comprehensive Pilates Teaching Certificate.`,
    },
    yocelyn: {
      name: "YOCELYN SALCIDO",
      profileImg: yocelynXL,
      position: "Instructor",
      description: `Yocelyn is currently pursuing a BS in Neuroscience with a concentration in Biology on the pre-med track at the University of Texas at El Paso. Alongside her academic studies, she conducts undergraduate research with Cushing Laboratory and serves as a peer leader for General Chemistry II, where she supports fellow students in understanding complex concepts. Her passion for ballet began at the age of three under the guidance of Andrée Harper. Since 2023, she has trained at Nylia Ballet Academy and is a proud member of the Nylia Ballet Company. As a soloist she has performed leading roles such as Odette/Odile in Swan Lake, Cinderella, and the Lilac Fairy in The Sleeping Beauty. She is excited to be part of this incredible team and looks forward to sharing her love and dedication for the art of ballet with others.`,
    },
    camila: {
      name: "LAURA CAMILA HELLMUTH",
      profileImg: camilaXL,
      position: "Instructor",
      description:
        "Laura Camila Hellmuth is a performing artist, teacher, and creative collaborator who hopes to inspire people to develop their individual talents of dance with proper ballet technique and free creative artistic expression. Graduating with a Bachelor of Fine Arts degree at the University of Texas in El Paso, her training has included ballet and other dance styles such as contemporary, modern, improvisation, hip-hop, and break dancing. Camila began her dance training under the instruction of Ms. McKenna and Miss Tena Vogel at The Dance Studio in Longview, Texas at the age of twelve; where she learned the discipline which has continued to shape her life and her love for movement and teaching.",
    },
  };

  return (
    <div class="team-container">
      <h1 id="team-label">THE TEAM</h1>
      <div id="team-card-bkg">
        <CardGroup>
          <TeamCard
            profileImg={memberInfo.ailyn.profileImg}
            name={memberInfo.ailyn.name}
            position={memberInfo.ailyn.position}
            description={memberInfo.ailyn.description}
            logo={ABTLogo}
          ></TeamCard>
          <TeamCard
            profileImg={memberInfo.beck.profileImg}
            name={memberInfo.beck.name}
            position={memberInfo.beck.position}
            description={memberInfo.beck.description}
          ></TeamCard>

          <TeamCard
            profileImg={memberInfo.anahid.profileImg}
            name={memberInfo.anahid.name}
            position={memberInfo.anahid.position}
            description={memberInfo.anahid.description}
          ></TeamCard>
          <TeamCard
            profileImg={memberInfo.luisa.profileImg}
            name={memberInfo.luisa.name}
            position={memberInfo.luisa.position}
            description={memberInfo.luisa.description}
          ></TeamCard>
          <TeamCard
            profileImg={memberInfo.clara.profileImg}
            name={memberInfo.clara.name}
            position={memberInfo.clara.position}
            description={memberInfo.clara.description}
          ></TeamCard>
          <TeamCard
            profileImg={memberInfo.camila.profileImg}
            name={memberInfo.camila.name}
            position={memberInfo.camila.position}
            description={memberInfo.camila.description}
          ></TeamCard>
          <TeamCard
            profileImg={memberInfo.yocelyn.profileImg}
            name={memberInfo.yocelyn.name}
            position={memberInfo.yocelyn.position}
            description={memberInfo.yocelyn.description}
          ></TeamCard>
        </CardGroup>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Team;
