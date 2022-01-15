import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>
    }

    const resumeBullets = [
        {label:"Education" , logoSrc:"education.svg"},
        {label:"Work History" , logoSrc:"work-history.svg"},
        {label:"Programing Skills" , logoSrc:"programming-skills.svg"},
        {label:"Projects" , logoSrc:"projects.svg"},
        {label:"Interests" , logoSrc:"interests.svg"},
    ]
    const programingSkillDetails = [
        {skill:"JavaScript" , ratingPercentage:90},
        {skill:"Node js" , ratingPercentage:94},
        {skill:"Express js" , ratingPercentage:95},
        {skill:"React js" , ratingPercentage:75},
        {skill:"Laravel" , ratingPercentage:40},
        {skill:"SQL" , ratingPercentage:90},
        {skill:"Mongo Db" , ratingPercentage:70},
        {skill:"Knex js" , ratingPercentage:90},
        {skill:"Sequelize" , ratingPercentage:90},
        {skill:"HTML" , ratingPercentage:65},
        {skill:"CSS" , ratingPercentage:60},
    ]

    const projectDetails = [
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
        {
            title:"Property Web Application",
            duration:{fromDate:"2021" , toDate:"2022"},
            description:"Work with team in Lucid-Source LTD company to develop and implement the property web application for redidential project ",
            subHeading:"Technologies Used: Node js , SQL , React js"
        },
        {
            title:"Personal Portfolio Website",
            duration:{fromDate:"2022" , toDate:"2022"},
            description:"A Personal website to showcase all my details and projects at one place. ",
            subHeading:"Technologies Used: Node js , React js"
        },
    ]

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            </div>
        </div>
    )
}
