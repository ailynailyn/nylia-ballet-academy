import { React } from "react";
import TeamCard from "../components/teamCard/TeamCard";
import ailyn from "../assets/ailynTeam.jpg";
import jazmine from "../assets/jazmine.png";
import clara from "../assets/clara.JPG";
import yocelyn from "../assets/yocelyn.JPG";
import katherine from "../assets/katherine.jpeg";
import "./Team.css";
import CardGroup from "react-bootstrap/CardGroup";

function Team() {
  // https://nicepage.com/ht/546181/successful-team-html-template

  var memberInfo = {
    ailyn: {
      name: "AILYN AGUIRRE",
      profileImg: ailyn,
      position: "ACADEMY DIRECTOR",
      description: `Ailyn began her ballet training at eleven years old under Andrée
      Harper and Ouisa Davis. After graduating from the University of
      Texas in Austin, Ailyn became a Software Engineer. After teaching
      and creating choreography at multiple studios throughout Texas, she
      returned to her native El Paso roots and founded Nylia Ballet
      Academy to provide an equal opportunity for anyone in the community
      to pursue their dreams in dance. Ailyn is an ABT® Certified Teacher, who has successfully completed the ABT® Teacher Training Intensive in Pre-Primary through Level 3 of the ABT® National Training Curriculum.`,
    },
    jazmine: {
      name: "JAZMINE CUEVAS",
      profileImg: jazmine,
      position: "MARKETING DIRECTOR",
      description:
        "Jazmine Janay Cuevas is an Educator and Contract Curator with specialized knowledge in Afro-Diasporic Cultures and Performance in Mexican and Mexican American spaces. She received her Masters from the University of Texas at El Paso where she worked as an Instructor of First Year Rhetoric and Writing teaching classes on Hip-hop, Nation-Buidling, and Blackness. She has since been a fellow for the Smithsonian’s Latino Museum Studies Program at the National Museum of African American History and Culture where she worked on curating accessible tours that center Latinidad in the Museum’s Afrofuturism exhibition. She is currently a fellow for the Borderlands Shakespeare Collectiva demonstrating how the art of adaption provides particular relevance and socio-political understanding for communities on the borderland. Jazmine’s background in Public Relations at the K-12 level and cultural programming in higher education and public institutions happily lead her to the Nylia Ballet Academy. She is excited to do her part in help building the academy’s relationship to community and learning the connotations of performance in the academy’s endeavors.",
    },
    clara: {
      name: "CLARA NEUFELD",
      profileImg: clara,
      position: "INSTRUCTOR",
      description: `Clara is a dance teacher, choreographer, & Pilates instructor across the nation. She is a TCU graduate, where she received a BFA in Ballet & BA in English with Honors Laureate Distinction, in addition to a Pilates Teaching Certificate. While at TCU, she performed as "Silver" in Jewels Pas de Quatre in Sleeping Beauty (excerpts), Swan Lake (Act II), & in original works by Keith Saunders, Rubén Gerding, & Peter Pucci. Clara studied under the Dance Scholarship, TCU Scholarship, Fine Arts Academic Achievement Scholarship, & College of Liberal Arts English Scholarship. She was a Hispanic Scholarship Fund Scholar, part of the John V. Roach Honors College, & Co-Director of National Business for the Chi Tau Epsilon Dance Honor Society. Prior to TCU, she trained in classical ballet under Andrée Harper, as an Eastwood High School Trooperette, & attended summer intensives at Oklahoma City Ballet & Ballet Austin.`,
    },
    katherine: {
      name: "KATHERINE QUEZADA",
      profileImg: katherine,
      position: "STUDIO MANAGER",
      description: `Katherine is a proud El Pasoan who was born and raised in the city. She is currently attending EPCC studying towards a chemistry degree in dreams of becoming a Forensic Science Technician. An experienced leader, Katherine is passionate about building an inviting and opportunistic environment for all kinds of dancers.`,
    },
    yocelyn: {
      name: "YOCELYN SALCIDO",
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
          profileImg={memberInfo.jazmine.profileImg}
          name={memberInfo.jazmine.name}
          position={memberInfo.jazmine.position}
          description={memberInfo.jazmine.description}
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
