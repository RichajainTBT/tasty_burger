import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import promotionImg from "../../assets/promotion/pro.png"

export default function Section4() {
  return (
    <>
      <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                   <img src={promotionImg} className='img-fluid' alt="promtion"/>
                </Col>
                <Col lang='{6}' className='px-5'>
                <h2>Nothing brings people together like a good burger</h2>
                  <p>
                    At <strong>Tasty Stack</strong>, every burger is more than just a meal — it's a moment shared.  
                    We use fresh, high-quality ingredients to create bold flavors that bring people together.  
                    From classic beef patties to mouth-watering vegan options, there's a burger for everyone at our table.
                  </p>
                  <ul>
                    <li><p>Freshly grilled burgers made with 100% premium meat and handcrafted sauces.</p></li>
                    <li><p>Soft, toasted brioche buns and locally sourced toppings in every bite.</p></li>
                    <li><p>Family-friendly, fast service, and flavor-packed combos you’ll crave again and again.</p></li>
                  </ul>
                </Col>
            </Row>
        </Container>
      </section>
      {/* parallax srcoll */}
      <section className='bg_parallax_scroll'>
        
      </section>
      {/* parallax srcoll */}
    </>
  )
}
