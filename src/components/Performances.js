import { React, useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import NyliaButton from "./nyliaButton/NyliaButton.js";
import Footer from "../components/Footer";

// ALICE IN WONDERLAND
import alice2026GallerySm from "../assets/performances/AliceInWonderland2026/AliceAndQueen-300.png";
import alice2026GalleryMd from "../assets/performances/AliceInWonderland2026/AliceAndQueen-768.png";
import alice2026GalleryLg from "../assets/performances/AliceInWonderland2026/AliceAndQueen-1280.png";
import alice2026GalleryXl from "../assets/performances/AliceInWonderland2026/AliceAndQueen-2000.png";
import alice2026Sm from "../assets/performances/AliceInWonderland2026/AliceAndQueen-300.png";
import alice2026Md from "../assets/performances/AliceInWonderland2026/AliceAndQueen-768.png";
import alice2026Lg from "../assets/performances/AliceInWonderland2026/AliceAndQueen-1280.png";
import alice2026Xl from "../assets/performances/AliceInWonderland2026/AliceAndQueen-2000.png";

// SWAN LAKE 2026
import swanLake2026GallerySm from "../assets/performances/SwanLake2026/SwanLake-Duo-300.png";
import swanLake2026GalleryMd from "../assets/performances/SwanLake2026/SwanLake-Duo-768.png";
import swanLake2026GalleryLg from "../assets/performances/SwanLake2026/SwanLake-Duo-1280.png";
import swanLake2026GalleryXl from "../assets/performances/SwanLake2026/SwanLake-Duo-2000.png";
import swanLake2026Sm from "../assets/performances/SwanLake2026/SwanLake2026-Poster-300.png";
import swanLake2026Md from "../assets/performances/SwanLake2026/SwanLake2026-Poster-768.png";
import swanLake2026Lg from "../assets/performances/SwanLake2026/SwanLake2026-Poster-1280.png";
import swanLake2026Xl from "../assets/performances/SwanLake2026/SwanLake2026-Poster-2000.png";

// THE LITTLE MERMAID 2025
import littleMermaidPosterSm from "../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-300.png";
import littleMermaidPosterMd from "../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-768.png";
import littleMermaidPosterLg from "../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-1280.png";
import littleMermaidPosterXl from "../assets/performances/TheLittleMermaid2025/TheLittleMermaidPoster-2000.png";

// SLEEPING BEAUTY 2025
// import sleepingBeautySm from "../assets/performances/SleepingBeauty.png";
import sleepingBeautySm from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Fairies-300.png";
import sleepingBeautyMd from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Fairies-768.png";
import sleepingBeautyLg from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Fairies-1280.png";
import sleepingBeautyXl from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Fairies-2000.png";
import sleepingBeautyPosterSm from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-300.png";
import sleepingBeautyPosterMd from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-768.png";
import sleepingBeautyPosterLg from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-1280.png";
import sleepingBeautyPosterXl from "../assets/performances/SleepingBeauty2025/SleepingBeauty-Poster-2000.png";

// SWAN LAKE 2025
import swanLakeXL from "../assets/performances/SwanLake2025/SwanLake2024Poster-2000.png";
// DRACULA 2024
import draculaXL from "../assets/performances/Dracula2024/Dracula Poster-Bride 2024.png";
// CINDERELLA 2024
import cinderellaGallerySm from "../assets/performances/Cinderella2024/Cinderella-BW-300.jpg";
import cinderellaGalleryMd from "../assets/performances/Cinderella2024/Cinderella-BW-768.jpg";
import cinderellaGalleryLg from "../assets/performances/Cinderella2024/Cinderella-BW-1280.jpg";
import cinderellaGalleryXl from "../assets/performances/Cinderella2024/Cinderella-BW-2000.jpg";
import cinderellaXL from "../assets/performances/Cinderella2024/Cinderella2024IG-Cinderella.png";
// UNS 2023
import unsSm from "../assets/performances/UNS 2023/UNS-Daisy-300.png";
import unsMd from "../assets/performances/UNS 2023/UNS-Daisy-768.png";
import unsLg from "../assets/performances/UNS 2023/UNS-Daisy-1280.png";
import unsXL from "../assets/performances/UNS 2023/UNS-Daisy-2000.png";
import unsPosterSm from "../assets/performances/UNS 2023/UNS-Poster-300.png";
import unsPosterMd from "../assets/performances/UNS 2023/UNS-Poster-768.png";
import unsPosterLg from "../assets/performances/UNS 2023/UNS-Poster-1280.png";
import unsPosterXl from "../assets/performances/UNS 2023/UNS-Poster-2000.png";
// TERRA 2023
import terraSm from "../assets/performances/Terra2023/Terra-Ballerinas-300.png";
import terraMd from "../assets/performances/Terra2023/Terra-Ballerinas-768.png";
import terraLg from "../assets/performances/Terra2023/Terra-Ballerinas-1280.png";
import terraXL from "../assets/performances/Terra2023/Terra-Ballerinas-2000.png";
import terraPosterSm from "../assets/performances/Terra2023/Terra-Poster-300.png";
import terraPosterMd from "../assets/performances/Terra2023/Terra-Poster-768.png";
import terraPosterLg from "../assets/performances/Terra2023/Terra-Poster-1280.png";
import terraPosterXl from "../assets/performances/Terra2023/Terra-Poster-2000.png";

import "./Performances.css";

function Performances() {
  // CAROUSEL GALLERY: Date, Title, Subtitle, Caption, ImageSet (Upper carousel), cardImages (lower cards) Link
  // Date must be in "Month Day, Year" format
  const activeIndex = 6;
  const [index, setIndex] = useState(activeIndex);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const carouselGallery = [
    {
      date: `September 10, 2023`,
      title: `Terra`,
      caption: `Nylia Ballet Academy's first Student Showcase featured Terra, a tribute to nature and the Earth, highlighting our students' dedication and progress through diverse ballet styles.`,
      imageSet: {
        sm: terraSm,
        md: terraMd,
        lg: terraLg,
        xl: terraXL,
      },
      cardImages: {
        sm: terraPosterSm,
        md: terraPosterMd,
        lg: terraPosterLg,
        xl: terraPosterXl,
      },
      link: `/performances/terra2023`,
    },
    {
      date: `December 16, 2023`,
      title: `Una Notte Silenziosa`,
      subtitle: `Ft. Excerpts from "The Nutcracker"`,
      caption: `Our Winter 2023 production, Una Notte Silenziosa, featured class pieces, solos with original choreography by Nylia Ballet Academy instructors, and excerpts from Tchaikovsky's The Nutcracker, bringing Clara's magical journey to life.`,
      imageSet: {
        sm: unsSm,
        md: unsMd,
        lg: unsLg,
        xl: unsXL,
      },
      cardImages: {
        sm: unsPosterSm,
        md: unsPosterMd,
        lg: unsPosterLg,
        xl: unsPosterXl,
      },
      link: `/performances/unanottesilenziosa2023`,
    },
    {
      date: `June 15, 2024`,
      title: `Cinderella`,
      caption: `Nylia Ballet Academy proudly presents their first public performance of Cinderella, a timeless tale of love, friendship, and self-discovery.`,
      imageSet: {
        sm: cinderellaGallerySm,
        md: cinderellaGalleryMd,
        lg: cinderellaGalleryLg,
        xl: cinderellaGalleryXl,
      },
      cardImages: {
        sm: cinderellaXL,
        md: cinderellaXL,
        lg: cinderellaXL,
        xl: cinderellaXL,
      },
      link: `/performances/cinderella2024`,
    },
    {
      date: `October 20, 2024`,
      title: `Dracula`,
      caption: `Enter the haunting world of Dracula, a ballet set in Transylvania, where villagers unite to thwart Dracula’s dark plans and save Svetlana from becoming his bride.`,
      imageSet: {
        sm: draculaXL,
        md: draculaXL,
        lg: draculaXL,
        xl: draculaXL,
      },
      cardImages: {
        sm: draculaXL,
        md: draculaXL,
        lg: draculaXL,
        xl: draculaXL,
      },
      link: `/performances/dracula2024`,
    },
    {
      date: `February 1, 2025`,
      title: `Swan Lake`,
      caption: `Experience the timeless romance of Swan Lake, where Prince Siegfried's love for Odette, the Swan Queen, holds the key to breaking a sorcerer's curse.`,
      imageSet: {
        sm: swanLakeXL,
        md: swanLakeXL,
        lg: swanLakeXL,
        xl: swanLakeXL,
      },
      cardImages: {
        sm: swanLakeXL,
        md: swanLakeXL,
        lg: swanLakeXL,
        xl: swanLakeXL,
      },
      link: `/performances/swanlake2025`,
    },
    {
      date: `May 8, 2025`,
      title: `Sleeping Beauty`,
      caption: `Visit an enchanting world of princesses, fairy godmothers, and magical spells!`,
      imageSet: {
        sm: sleepingBeautySm,
        md: sleepingBeautyMd,
        lg: sleepingBeautyLg,
        xl: sleepingBeautyXl,
      },
      cardImages: {
        sm: sleepingBeautyPosterSm,
        md: sleepingBeautyPosterMd,
        lg: sleepingBeautyPosterLg,
        xl: sleepingBeautyPosterXl,
      },
      link: `/performances/sleepingbeauty2025`,
    },
    {
      date: `Fall 2025`,
      title: `The Little Mermaid`,
      caption: `Join Nylia Ballet Company for The Little Mermaid, a tale of love, sacrifice, and courage brought to life on stage.`,
      imageSet: {
        sm: littleMermaidPosterSm,
        md: littleMermaidPosterMd,
        lg: littleMermaidPosterLg,
        xl: littleMermaidPosterXl,
      },
      cardImages: {
        sm: littleMermaidPosterSm,
        md: littleMermaidPosterMd,
        lg: littleMermaidPosterLg,
        xl: littleMermaidPosterXl,
      },
      link: `/performances/thelittlemermaid2025`,
    },
    {
      date: `Winter 2026`,
      title: `Swan Lake`,
      caption: `Immerse yourself in Swan Lake, where Prince Siegfried's love for Odette must overcome a sorcerer's curse that binds her to a swan's form by day.`,
      imageSet: {
        sm: swanLake2026GallerySm,
        md: swanLake2026GalleryMd,
        lg: swanLake2026GalleryLg,
        xl: swanLake2026GalleryXl,
      },
      cardImages: {
        sm: swanLake2026Sm,
        md: swanLake2026Md,
        lg: swanLake2026Lg,
        xl: swanLake2026Xl,
      },
      link: `/performances/swanlake2026`,
    },
    {
      date: `Summer 2026`,
      title: `Alice in Wonderland`,
      caption: `Join Nylia Ballet Company for a magical journey through *Alice in Wonderland*, where Alice encounters whimsical characters and unforgettable moments, brought to life with stunning choreography, costumes, and music.`,
      imageSet: {
        sm: alice2026GallerySm,
        md: alice2026GalleryMd,
        lg: alice2026GalleryLg,
        xl: alice2026GalleryXl,
      },
      cardImages: {
        sm: alice2026Sm,
        md: alice2026Md,
        lg: alice2026Lg,
        xl: alice2026Xl,
      },
      link: `/performances/aliceinwonderland2026`,
    },
  ];

  return (
    <div class="main-container performances-container">
      <div className="main-bkg" id="performances-section">
        <div className="main-title">
          <h1>PERFORMANCES</h1>
        </div>
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {carouselGallery.map((carouselItem, index) => (
              <Carousel.Item className="align-items-center">
                <img
                  src={carouselItem.imageSet.sm}
                  srcSet={`${carouselItem.imageSet.sm} 300w, ${carouselItem.imageSet.md} 768w, ${carouselItem.imageSet.lg} 1280w, ${carouselItem.imageSet.xl} 2000w`}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="El Paso Ballet Nylia Ballet Academy School for Classical Ballet performing in nylia ballet company productions"
                />
                <Carousel.Caption>
                  <h4>
                    <i>{carouselItem.date}</i>
                  </h4>
                  <h2>{carouselItem.title.toUpperCase()}</h2>
                  <h3>
                    <i>{carouselItem.subtitle}</i>
                  </h3>
                  <p>{carouselItem.caption}</p>
                  <a href={carouselItem.link}>
                    <NyliaButton label={carouselItem.title}></NyliaButton>
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="main-box">
          <p>
            At Nylia Ballet Academy, we want to create performing opportunities
            to dancers in order for them to gain self- confidence and
            independence, as well as foster in them a love and appreciation for
            the art of dance.
            <br />
            <br />A major component of dance training is learning through
            performance. While performance opportunities can help prepare some
            students for a possible career in dance, they also contribute to
            children’s success in non-dance activities. The performing
            experience helps build self-esteem and self- confidence and can
            result in better in-school presentations, improved social skills,
            and strong interview skills for future college or job opportunities.
          </p>
          <hr></hr>
          <div className="performanceButtons">
            {carouselGallery.map((carouselItem, index) => (
              <Button href={carouselItem.link} variant="outline-info">
                {carouselItem.title} '{carouselItem.date.slice(-2)}
              </Button>
            ))}
          </div>
          <hr></hr>
        </div>
        <div className="performances-gallery-section">
          <MDBRow>
            {carouselGallery.map((carouselItem, index) => (
              <MDBCol sm="4" className="mb-4 mb-lg-0">
                <div className="perfGalleryImgContainer">
                  <a href={carouselItem.link}>
                    <img
                      src={carouselItem.cardImages.sm}
                      srcSet={`${carouselItem.cardImages.sm} 300w, ${carouselItem.cardImages.md} 768w, ${carouselItem.cardImages.lg} 1280w, ${carouselItem.cardImages.xl} 2000w`}
                      className="w-100 shadow-1-strong rounded mb-4"
                      alt="El Paso Ballet Nylia Ballet Academy School for Classical Ballet performing in nylia ballet company productions"
                    />
                    <div class="perfGalleryImgOverlay">
                      <div class="perfGalleryImgText">
                        <h2>{carouselItem.title.toUpperCase()}</h2>
                        <p>{carouselItem.date.slice(-4)}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Performances;
