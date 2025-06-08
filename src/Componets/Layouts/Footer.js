import React,{useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/FooterStyle.css"

export default function Footer() {

  const [isVisible, setIsVisiable] =useState(false);
  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  }

  const listenToScroll=()=>{
    let heightTopHidden = 250;
    const windowScroll =document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll>heightTopHidden ?setIsVisiable(true):setIsVisiable(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", listenToScroll);
  })

  return (
       <>
        <footer>
          <Container>
            <Row>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                <div className='text-center'>
                 <h5> Location</h5>
                <p>Jhansi UP</p>
                </div>
              </Col>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                <div className='text-center'>
                 <h5>Working Hours</h5>
                 <p>Mon-Fri: 9:00AM - 10:00PM</p>
                 <p>Saturday: 10:00AM - 8:30PM</p>
                </div>
              </Col>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                <div className='text-center'>
                 <h5> Order Now</h5>
                  <p>Quaerat neque purus ipsum</p>
                  <p>
                    <Link to="tel:9999999999" className='calling'>9999999999</Link>
                  </p>
                </div>
              </Col>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                <div className='text-center'>
                 <h5>Follow Us</h5>
                  <ul className='list-unstyled text-center mt-2'>
                    <li>
                      <Link to="/">
                        <i className='bi bi-facebook'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className='bi bi-twitter'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className='bi bi-instagram'></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className='bi bi-youtube'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className='copyright'>
               <ul className='list-unstyled text-center mb-0'>
                  <li>
                      <Link to="/">
                        © 2025 <span>Richajain</span>. All Rights Reserved
                      </Link>
                    </li>
                  <li>
                      <Link to="/">
                        About us
                      </Link>
                    </li>
                   <li>
                      <Link to="/">
                        Terms of Use
                      </Link>
                    </li>
                   <li>
                      <Link to="/">
                       Privacy Policy
                      </Link>
                    </li>
               </ul>
            </div>
          </Container>
        </footer>
        {/* scrolltop */}
        {isVisible &&(
         <div className='scrollTop' onClick={scrollTop}>
          <i class="bi bi-arrow-up-short"></i>
         </div>
         )
        }
        
        {/* scrolltop */}
       </>
  )
}
