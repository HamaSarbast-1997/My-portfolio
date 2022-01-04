import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
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
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Muhammed</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Muhammed Dev 🔴",
                                        1000,
                                        "Full Stack Dev 💻",
                                        1000,
                                        "MERN Stack Dev 😎",
                                        1000,
                                        "Software Eng 🎓",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='muhammed.pdf' download='Muhammed Sarbast.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
