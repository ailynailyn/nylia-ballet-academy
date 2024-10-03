import { React } from "react";
import TeamCard from "../components/teamCard/TeamCard";
import Footer from "../components/Footer";
import ailyn from "../assets/nbc/headshots/JPEG-2000/ailyn.png";
import jazmine from "../assets/teamPages/jazmine.png";
import tiffinyXL from "../assets/nbc/headshots/JPEG-2000/tiffiny.jpg";
import graceXL from "../assets/nbc/headshots/JPEG-2000/grace.jpg";
import beckXL from "../assets/nbc/headshots/JPEG-2000/beck.jpg";
import claraXL from "../assets/nbc/headshots/JPEG-2000/clara2.png";
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
      to pursue their dreams in dance. Ailyn is an ABT® Certified Teacher, who has successfully completed the ABT® Teacher Training Intensive in Pre-Primary through Level 3 of the ABT® National Training Curriculum.`,
    },
    beck: {
      name: "BECK CUELLAR",
      profileImg: beckXL,
      position: "Executive Assistant & Production Assistant",
      description:
        "Beck, a proud El Paso native, is currently pursuing a BFA with a focus on Painting and a minor in Graphic Design at UTEP. Following high school, Beck was offered a soccer scholarship at Navarro College and also secured a prestigious local scholarship from El Paso. With a diverse background in various job fields, Beck has diligently honed their artistic skills while also making a name for themselves as a local vegan cook, actively seeking to expand their culinary expertise. Securing multiple scholarships and furthering their art techniques, Beck joined Nylia Ballet Academy as a Production Assistant, whose works include personally crafting the Cinderella set. In addition to serving as the house artist, they are a valuable member of the Nylia Dancewear team, contributing to the creation of stunning attire. Furthermore, Beck has attained a Technical Diploma in Medical Assistance and completed their phlebotomy certification through a Texas-accredited school, showcasing their versatility beyond artistic pursuits. Known for their multitude of talents and unwavering passion for art, Beck consistently brings a burst of creativity to Nylia Ballet's showcases.",
    },
    jazmine: {
      name: "JAZMINE CUEVAS",
      profileImg: jazmine,
      position:
        "Marketing Coordinator and Reformative Justice & Performance Consultant",
      description:
        "Jazmine Janay Cuevas is an Educator and Contract Curator with specialized knowledge in Afro-Diasporic Cultures and Performance in Mexican and Mexican American spaces. She received her Masters from the University of Texas at El Paso where she worked as an Instructor of First Year Rhetoric and Writing teaching classes on Hip-hop, Nation-Buidling, and Blackness. She has since been a fellow for the Smithsonian’s Latino Museum Studies Program at the National Museum of African American History and Culture where she worked on curating accessible tours that center Latinidad in the Museum’s Afrofuturism exhibition. She is currently a fellow for the Borderlands Shakespeare Collectiva demonstrating how the art of adaption provides particular relevance and socio-political understanding for communities on the borderland. Jazmine’s background in Public Relations at the K-12 level and cultural programming in higher education and public institutions happily lead her to the Nylia Ballet Academy. She is excited to do her part in help building the academy’s relationship to community and learning the connotations of performance in the academy’s endeavors.",
    },
    grace: {
      name: "GRACE MCCOY",
      profileImg: graceXL,
      position: "Artistic Director - Nylia Ballet Company",
      description:
        "Originally from Oklahoma, Grace is a retired dancer, choreographer, instructor, and fine artist. Trained at Tulsa Ballet, as well as The Kirov Academy, Boston Ballet, Ellison Ballet, and the Marais Ballet School in Paris, placing top 12 at YAGP in 2011 and 2012. Grace joined Tulsa Ballet in 2013 and during their time there performed works by many great choreographers including, Marcello Angelini, Ma Cong, Adam Hougland, Ben Stevenson, Paul Taylor, and Christopher Wheeldon. Upon retirement, they worked as Ballet Mistress for Academy of Performing Arts and has choreographed several full-length performance pieces including an original production of Alice in Wonderland and a Four Moons Ballet celebrating the five native ballerinas from Oklahoma. Grace has worked as a choreographer and instructor at multiple dance studios in the Pacific Northwest, and most recently was Ballet Mistress at Columbia Ballet School in South Carolina, coaching their students to first place awards at many competitions as well as having many graduates and receive contracts with ballet or contemporary companies including, Alvin Ailey, Boston Ballet, Ballet West, Sarasota Ballet, Cincinnati Ballet, and North Carolina School of the Arts. Grace's choreography has been showcased at YAGP finals, the DC Native American Smithsonian, and many performances around the US. Grace currently lives in El Paso, and is excited to be at Nylia Ballet. In addition to a dance career, Grace is currently an MFA candidate in Art Practice from the School of Visual Arts in New York City, has a BFA in Studio Art, is a 500-hour registered yoga teacher, a NASM certified personal trainer, and an NCSA certified strength and conditioning coach.",
    },
    clara: {
      name: "CLARA NEUFELD",
      profileImg: claraXL,
      position: "Instructor",
      description: `Clara Neufeld is a dance teacher, Pilates instructor, and choreographer passionate about connecting people to the joy of movement in all forms throughout El Paso, TX. Clara’s dance training began in classical ballet under the direction of Andrée Harper, instilling her with discipline, perseverance, and a drive for excellence. As an Eastwood HS Trooperette, Clara discovered her passion for teaching and choreographing.  These pursuits led her to Texas Christian University’s School for Classical & Contemporary Dance, where she studied under various dance merit and academic achievement scholarships, as a Hispanic Scholarship Fund Scholar, and part of the John V. Roach Honors College.  While at TCU, Clara performed as “Silver” in Jewels Pas de Quarte in The Sleeping Beauty (excerpts), Swan Lake (Act II), and in original works by Keith Saunders, Rubén Gerding, and Peter Pucci.  In May 2023, Clara received a BFA in Ballet and a BA in English with Honors Laureate Distinction, in addition to a 700-hour comprehensive Pilates Teaching Certificate.`,
    },
    tiffiny: {
      name: "TIFFINY STEVENS",
      profileImg: tiffinyXL,
      position: "Instructor - Nylia Ballet Youth Company",
      description: `Tiffiny Stevens is a dance instructor and choreographer. She began her training under El Paso 
      ballet legends, Andree Harper and Ingeborg Heuser. Tiffiny has attended summer intensives with 
      American Ballet Theatre, Pacific Northwest Ballet, School of American Ballet and The Jillana 
      School where she learned from Balanchine ballerina Jillana. She continued her training in New 
      York at The Joffrey Ballet School, where she had the opportunity to tour with their concert group
      and perform original works choreographed by Gerald Arpino, Robert Joffrey, Earl Mosely and 
      Dwight Rhoden as well as featured roles in Swan Lake, Sleeping Beauty, The Nutcracker and 
      Don Quixote. Tiffiny began teaching ballet in El Paso after an injury caused her to retire early 
      from dance. Her students have had many successes of their own from being accepted into college
      dance programs like The Boston Conservatory at Berklee, and summer and year-round ballet 
      programs with Ballet Arizona, Complexions Contemporary Ballet, Joffrey Ballet, Ballet Austin, 
      and American Ballet Theatre.`,
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
          ></TeamCard>
          <TeamCard
            profileImg={memberInfo.beck.profileImg}
            name={memberInfo.beck.name}
            position={memberInfo.beck.position}
            description={memberInfo.beck.description}
          ></TeamCard>
          {/* <TeamCard
            profileImg={memberInfo.jazmine.profileImg}
            name={memberInfo.jazmine.name}
            position={memberInfo.jazmine.position}
            description={memberInfo.jazmine.description}
          ></TeamCard> */}
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
            profileImg={memberInfo.tiffiny.profileImg}
            name={memberInfo.tiffiny.name}
            position={memberInfo.tiffiny.position}
            description={memberInfo.tiffiny.description}
          ></TeamCard>
        </CardGroup>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Team;
