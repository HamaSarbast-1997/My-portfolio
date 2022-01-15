import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 78 },
    { skill: "Node JS", ratingPercentage: 95 },
    { skill: "Express JS", ratingPercentage: 95 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "SQL", ratingPercentage: 89 },
    { skill: "HTML", ratingPercentage: 96 },
    { skill: "CSS", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
        title:"Ecommerce Web Application",
        duration:{fromDate:"2020" , toDate:"2021"},
        description:"Work with team to develop and implement online business plans and establish brand roadmaps and developing & improving solutions by preparing & evaluating alternative workflow solutions",
        subHeading:"Technologies Used: Node js , MongoDB"
    },
    {
        title:"Realestate Platform",
        duration:{fromDate:"2021" , toDate:"2022"},
        description:"Work with team in Lucid-Source LTD company to develop and implement realestate platform as a service for realestates",
        subHeading:"Technologies Used: Node js , SQL , React js"
    },
    {
        title:"Web Development",
        duration:{fromDate:"2021" , toDate:"2022"},
        description:"Work with team in Lucid-Source LTD company to develop and implement over 10 website for the Lucid client  exp: Lalav Group , HITEX  , AVI Organazation , MCT Group , Hollywood smile etc... ",
        subHeading:"Technologies Used: Node js , SQL , React js"
    },
    // {
    //     title:"Personal Portfolio Website",
    //     duration:{fromDate:"2022" , toDate:"2022"},
    //     description:"A Personal website to showcase all my details and projects at one place. ",
    //     subHeading:"Technologies Used: Node js , React js"
    // },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Salahaddin Universty-College of Engineering"}
        subHeading={"BACHELOR DEGREE IN SOFTWARE AND INFORMATICS ENGINEERING"}
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Cambridge Center"}
        subHeading={"Cambridge Center"}
        fromDate={"2017"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Command Secondary School Kurdistan high school"}
        fromDate={"2013"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Lucid-Source LTD"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as Full Stack developer
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed website and system for client with the dashboard
            managing the products, managing services, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to improve my skills.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      {/* <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      /> */}
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops,,, no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

//   useEffect(() => {
//     return () => {
//       /* UNSUBSCRIBE THE SUBSCRIPTIONS */
//       fadeInSubscription.unsubscribe();
//     };
//   }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
