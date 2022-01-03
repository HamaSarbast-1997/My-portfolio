import React from 'react'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
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

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Muhammed</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
