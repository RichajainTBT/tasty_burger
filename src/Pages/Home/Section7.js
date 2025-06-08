import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Section7() {
  return (
    <>
     <section className='contact'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                  <h4>We Guarantee</h4>
                  <h2>30 Minutes Delivery!</h2>
                  <p className="mb-4">  Enjoy hot, fresh burgers delivered straight to your door in **30 minutes or less** — guaranteed.  
                    Fast, reliable, and always delicious.</p>
                    <Link className='btn btn_red px-4 mt-2 py-2 rounded-0' to="/">
                    CALL : 9999999999
                    </Link>
                </Col>
            </Row>
        </Container>
     </section>
    </>
  )
}
