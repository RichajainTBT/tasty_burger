import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png"
import Salad from "../../assets/about/salad.png"
import Delivery from "../../assets/about/delivery-bike.png"

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  // Add more mock data objects as needed
];

export default function About() {
  return (
   <>
    <section className='about_section'>
        <Row>
            <Col lg={{span:8, offset:2}} className='text-center'>
            <h2>The burger tastes better when you eat it with your family</h2>
            <p>Welcome to Tasty Burger, where passion meets the perfect patty.
                We’re not just serving burgers — we’re serving experiences.
                 Every burger we craft is made from 100% fresh, locally sourced
                  ingredients, seasoned to perfection, and grilled with love.</p>
            <Link to="/" className='btn order_now btn_red'>Explore Full Menu</Link>
            </Col>
        </Row>
    </section>
    <section className='about_wrapper'>
     <Container>
        <Row className='justify-content-md-center'>
          {
            mockData.map((carddata,index)=>(
                <Col md={6} lg={4} className='mb-4 mb-lg mb-md-0' key={index}>
                   <div className='about_box text-center'>
                     <div className='about_icon'>
                        <img src={carddata.image} className='img-fluid' alt="icon"/>
                     </div>
                     <h4>{carddata.title}</h4>
                     <p>{carddata.paragraph}</p>
                   </div>
                </Col>
            ))
          }
        </Row>
     </Container>
    </section>
   </>
  )
}
