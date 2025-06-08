import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom';
// import HomeStyle from '../../styles/HomeStyle.css'

export default function IntroSec() {
  return (
    <section className='here_section'>
      <Container>
        <Row>
            <Col lg={7} className='mb-5 mb-lg-0'>
              <div className='position-relative'>
                <img src={burger} className='img-fluid' alt="Hero"/>
                <div className='prince_badge'>
                    <div className='badge-text'>
                        <h4 className='badge-amt-text'>Only</h4>
                        <h4 className='badge-amt'>$ 6.99</h4>
                    </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
            <div className='here_text text-center'>
                <h1 className='text-white'>New Burger</h1>
                <h2 className='text-white'>With Onion</h2>
                <p className='text-white pt-2 pb-4'>we craft burgers with 100% fresh, grass-fed beef, perfectly toasted brioche buns, and bold homemade sauces. 
                  {/* Whether you're craving a classic cheeseburger or a spicy jalapeño blast, we’ve got something to satisfy every appetite. */}
                </p>
                <Link to="/" className='btn order_now'>Order  now</Link>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
