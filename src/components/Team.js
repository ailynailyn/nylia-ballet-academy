import { React } from "react";
import TeamCard from "../components/teamCard/TeamCard";
import ailyn from "../assets/teamPages/ailynTeam.jpg";
import jazmine from "../assets/teamPages/jazmine.png";
import clara from "../assets/teamPages/clara.JPG";
import grace from "../assets/teamPages/grace.jpg";
import yocelyn from "../assets/teamPages/yocelyn.JPG";
import katherine from "../assets/teamPages/katherine.jpeg";
import "./Team.css";
import CardGroup from "react-bootstrap/CardGroup";

function Team() {
  // https://nicepage.com/ht/546181/successful-team-html-template

  var memberInfo = {
    ailyn: {
      name: "AILYN AGUIRRE",
      profileImg: ailyn,
      position: "Academy Director",
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
      position: "Marketing Director",
      description:
        "Jazmine Janay Cuevas is an Educator and Contract Curator with specialized knowledge in Afro-Diasporic Cultures and Performance in Mexican and Mexican American spaces. She received her Masters from the University of Texas at El Paso where she worked as an Instructor of First Year Rhetoric and Writing teaching classes on Hip-hop, Nation-Buidling, and Blackness. She has since been a fellow for the Smithsonian’s Latino Museum Studies Program at the National Museum of African American History and Culture where she worked on curating accessible tours that center Latinidad in the Museum’s Afrofuturism exhibition. She is currently a fellow for the Borderlands Shakespeare Collectiva demonstrating how the art of adaption provides particular relevance and socio-political understanding for communities on the borderland. Jazmine’s background in Public Relations at the K-12 level and cultural programming in higher education and public institutions happily lead her to the Nylia Ballet Academy. She is excited to do her part in help building the academy’s relationship to community and learning the connotations of performance in the academy’s endeavors.",
    },
    grace: {
      name: "GRACE MCCOY",
      profileImg: grace,
      position: "Artistic Director - Nylia Ballet Company",
      description:
        "Originally from Oklahoma, Grace is a retired dancer, choreographer, instructor, and fine artist. Trained at Tulsa Ballet, as well as The Kirov Academy, Boston Ballet, Ellison Ballet, and the Marais Ballet School in Paris, placing top 12 at YAGP in 2011 and 2012. Grace joined Tulsa Ballet in 2013 and during their time there performed works by many great choreographers including, Marcello Angelini, Ma Cong, Adam Hougland, Ben Stevenson, Paul Taylor, and Christopher Wheeldon. Upon retirement, they worked as Ballet Mistress for Academy of Performing Arts and has choreographed several full-length performance pieces including an original production of Alice in Wonderland and a Four Moons Ballet celebrating the five native ballerinas from Oklahoma. Grace has worked as a choreographer and instructor at multiple dance studios in the Pacific Northwest, and most recently was Ballet Mistress at Columbia Ballet School in South Carolina, coaching their students to first place awards at many competitions as well as having many graduates and receive contracts with ballet or contemporary companies including, Alvin Ailey, Boston Ballet, Ballet West, Sarasota Ballet, Cincinnati Ballet, and North Carolina School of the Arts. Grace's choreography has been showcased at YAGP finals, the DC Native American Smithsonian, and many performances around the US. Grace currently lives in El Paso, and is excited to be at Nylia Ballet. In addition to a dance career, Grace is currently an MFA candidate in Art Practice from the School of Visual Arts in New York City, has a BFA in Studio Art, is a 500-hour registered yoga teacher, a NASM certified personal trainer, and an NCSA certified strength and conditioning coach.",
    },
    clara: {
      name: "CLARA NEUFELD",
      profileImg: clara,
      position: "Instructor",
      description: `Clara Neufeld is a dance teacher, Pilates instructor, and choreographer passionate about connecting people to the joy of movement in all forms throughout El Paso, TX. Clara’s dance training began in classical ballet under the direction of Andrée Harper, instilling her with discipline, perseverance, and a drive for excellence. As an Eastwood HS Trooperette, Clara discovered her passion for teaching and choreographing.  These pursuits led her to Texas Christian University’s School for Classical & Contemporary Dance, where she studied under various dance merit and academic achievement scholarships, as a Hispanic Scholarship Fund Scholar, and part of the John V. Roach Honors College.  While at TCU, Clara performed as “Silver” in Jewels Pas de Quarte in The Sleeping Beauty (excerpts), Swan Lake (Act II), and in original works by Keith Saunders, Rubén Gerding, and Peter Pucci.  In May 2023, Clara received a BFA in Ballet and a BA in English with Honors Laureate Distinction, in addition to a 700-hour comprehensive Pilates Teaching Certificate.`,
    },
    katherine: {
      name: "KATHERINE QUEZADA",
      profileImg: katherine,
      position: "Studio Manager",
      description: `Katherine is a proud El Pasoan who was born and raised in the city. She is currently attending EPCC studying towards a chemistry degree in dreams of becoming a Forensic Science Technician. An experienced leader, Katherine is passionate about building an inviting and opportunistic environment for all kinds of dancers.`,
    },
    yocelyn: {
      name: "YOCELYN SALCIDO",
      profileImg: yocelyn,
      position: "Instructor",
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
          profileImg={memberInfo.grace.profileImg}
          name={memberInfo.grace.name}
          position={memberInfo.grace.position}
          description={memberInfo.grace.description}
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
