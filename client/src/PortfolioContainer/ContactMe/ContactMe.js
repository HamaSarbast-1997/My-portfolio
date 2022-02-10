import React, { useState } from 'react';
import Typical from 'react-typical';

import imagBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';


export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);
    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading
                subHeading={"Lets Keep In Touch"}
                title={"Contact Me"}
            />
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch 🤝🏻",
                                1000,
                                "Email me and let's work together 😊",
                                1000
                            ]}
                        />
                    </h2>

                    <a href='https://www.facebook.com/muhammed.sarbast.9'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/soulltan_.1997/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://twitter.com/Muhamme28815866'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='https://github.com/HamaSarbast-1997'>
                        <i class="fa fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/muhammed-sarbast-358238202/'>
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={imagBack} alt="image not found" />
                    </div>
                    <form>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' />
                        <label htmlFor='email'>Email</label>
                        <input type='email' />
                        <label htmlFor='message'>Message</label>
                        <textarea type='text' />
                        <div className='send-btn'>
                            <button type='submit'>Send <i className='fa fa-paper-plane' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}