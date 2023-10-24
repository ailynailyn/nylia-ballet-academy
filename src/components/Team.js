import { React } from "react";
import TeamCard from "../components/teamCard/TeamCard";
import ailyn from "../assets/ailynTeam.jpg";
import clara from "../assets/clara.JPG";
import yocelyn from "../assets/yocelyn.JPG";
import melanie from "../assets/melanie.JPG";
import katherine from "../assets/katherine.jpeg";
import "./Team.css";
import CardGroup from "react-bootstrap/CardGroup";

function Team() {
  // https://nicepage.com/ht/546181/successful-team-html-template

  var memberInfo = {
    ailyn: {
      name: "Ailyn Aguirre",
      profileImg: ailyn,
      position: "DIRECTOR",
      description: `Ailyn began her ballet training at eleven years old under Andrée
      Harper and Ouisa Davis. After graduating from the University of
      Texas in Austin, Ailyn became a Software Engineer. After teaching
      and creating choreography at multiple studios throughout Texas, she
      returned to her native El Paso roots and founded Nylia Ballet
      Academy to provide an equal opportunity for anyone in the community
      to pursue their dreams in dance. Ailyn is an ABT® Certified Teacher, who has successfully completed the ABT® Teacher Training Intensive in Pre-Primary through Level 3 of the ABT® National Training Curriculum.`,
    },
    alani: {
      name: "Alani Hatten",
      profileImg: "",
      position: "INSTRUCTOR",
      description: `Alani is a dedicated individual with a 16-year journey in the world of dance. She has been trained in Classical Ballet under the instruction of Andrée Harper and Ouisa Davis. She is a former Eastwood Trooperette and an alumni from The Jillana School summer intensive where she studied Ballet, Contemporary and Character dance and has proven commitment in various other dance areas. Alani was a part of a 3X NDA Pom National Champion dance team, the DBU Patriettes. Currently pursuing a BFA in Dance with a focus on Dance Studies and Choreography, her dedication to the art form of dance shines through. Additionally, her role on the UTEP dance team, led by Leslie Lopez, demonstrates her ongoing commitment to excellence in dance. Her journey is a testament to her passion and talent in the world of dance.`,
    },
    clara: {
      name: "Clara Neufeld",
      profileImg: clara,
      position: "INSTRUCTOR",
      description: `Clara is a dance teacher, choreographer, & Pilates instructor across the nation. She is a TCU graduate, where she received a BFA in Ballet & BA in English with Honors Laureate Distinction, in addition to a Pilates Teaching Certificate. While at TCU, she performed as "Silver" in Jewels Pas de Quatre in Sleeping Beauty (excerpts), Swan Lake (Act II), & in original works by Keith Saunders, Rubén Gerding, & Peter Pucci. Clara studied under the Dance Scholarship, TCU Scholarship, Fine Arts Academic Achievement Scholarship, & College of Liberal Arts English Scholarship. She was a Hispanic Scholarship Fund Scholar, part of the John V. Roach Honors College, & Co-Director of National Business for the Chi Tau Epsilon Dance Honor Society. Prior to TCU, she trained in classical ballet under Andrée Harper, as an Eastwood High School Trooperette, & attended summer intensives at Oklahoma City Ballet & Ballet Austin.`,
    },
    katherine: {
      name: "Katherine Quezada",
      profileImg: katherine,
      position: "STUDIO MANAGER",
      description: `Katherine is a proud El Pasoan who was born and raised in the city. She is currently attending EPCC studying towards a chemistry degree in dreams of becoming a Forensic Science Technician. An experienced leader, Katherine is passionate about building an inviting and opportunistic environment for all kinds of dancers.`,
    },
    melanie: {
      name: "Melanie Roman Naciff",
      profileImg: melanie,
      position: "ADMINISTRATIVE ASSISTANT",
      description: `Melanie is a current Junior in high school in the International Baccelaureate Program. She enjoys spending her time in book club, student council, playing soccer, being with animals, and running. She is constantly pursuing learning, and is striving to obtain her IB Diploma, along with getting into a rigorous university.`,
    },
    yocelyn: {
      name: "Yocelyn Salcido",
      profileImg: yocelyn,
      position: "INSTRUCTOR",
      description: `From Bellflower, California, Yocelyn moved to El Paso and began
      dancing at the age of three. She is currently studying towards her
      degree in Neuroscience at UTEP. After furthering her ballet training
      at Nylia Ballet Academy, Yocelyn now teaches the Pre-Ballet classes
      and is very enthusiastic to inspire and create a nurturing
      environment for all.`,
    },
  };

  return (
    <div class="team-container">
      <h1 id="team-label">THE TEAM</h1>
      <CardGroup>
        <TeamCard
          profileImg={memberInfo.ailyn.profileImg}
          name={memberInfo.ailyn.name}
          position={memberInfo.ailyn.position}
          description={memberInfo.ailyn.description}
        ></TeamCard>
        <TeamCard
          // profileImg={memberInfo.alani.profileImg}
          name={memberInfo.alani.name}
          position={memberInfo.alani.position}
          description={memberInfo.alani.description}
        ></TeamCard>
        <TeamCard
          profileImg={memberInfo.clara.profileImg}
          name={memberInfo.clara.name}
          position={memberInfo.clara.position}
          description={memberInfo.clara.description}
        ></TeamCard>

        <TeamCard
          profileImg={memberInfo.katherine.profileImg}
          name={memberInfo.katherine.name}
          position={memberInfo.katherine.position}
          description={memberInfo.katherine.description}
        ></TeamCard>
        <TeamCard
          profileImg={memberInfo.melanie.profileImg}
          name={memberInfo.melanie.name}
          position={memberInfo.melanie.position}
          description={memberInfo.melanie.description}
        ></TeamCard>

        <TeamCard
          profileImg={memberInfo.yocelyn.profileImg}
          name={memberInfo.yocelyn.name}
          position={memberInfo.yocelyn.position}
          description={memberInfo.yocelyn.description}
        ></TeamCard>
      </CardGroup>
    </div>
  );
}

export default Team;
