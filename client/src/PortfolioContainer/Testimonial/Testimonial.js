import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Testimonial.css'

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
      loop:true,
      margin:0,
      nav:true,
      animateIn:"bounceInRight",
      animatdOut:"bounceOutRight",
      dots:true,
      autoplay:true,
      smartSpeed:1000,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:1
        },
        1000:{
          items:3
        }
      }
    }

  return (
    <div>
      <ScreenHeading
        title={'Testimonial'}
        subHeading={'What Othere Developers Say About Me'}
      />
      <section className='testimonial-section' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>


              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/miran.png' alt='No Internet Connection'
                    ></img>
                    <h5>Miran Kamal</h5>
                    <p>Mobile Application Developer</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/miran.png' alt='No Internet Connection'
                    ></img>
                    <h5>Ahmed Nihmat</h5>
                    <p>Mobile Application Developer</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/miran.png' alt='No Internet Connection'
                    ></img>
                    <h5>Ali Amjad</h5>
                    <p>Mobile Application Developer</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src='img/Testimonial/miran.png' alt='No Internet Connection'
                    ></img>
                    <h5>Aram Rafiq</h5>
                    <p>Mobile Application Developer</p>
                  </div>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
       <img/>
      </div>
    </div>

  )
}
