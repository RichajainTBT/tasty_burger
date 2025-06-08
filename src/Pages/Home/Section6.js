import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

export default function Section6() {
  return (
    <>
       <section className='blog_section'>
             <Container>
                  <Carousel>
                   <Carousel.Item>
                     <Carousel.Caption>
                        <div className='user-img'>
                             <img src={User1} className='img-fluid' alt="user1-1" />
                        </div>
                        <p> Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque</p>
                        <div className='item_rating mb-2'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>By Mohan Sharma</h5>
                     </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                     <Carousel.Caption>
                        <div className='user-img'>
                             <img src={User2} className='img-fluid' alt="user2" />
                        </div>
                        <p> Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque</p>
                        <div className='item_rating mb-2'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>By Mohan Sharma</h5>
                     </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                     <Carousel.Caption>
                        <div className='user-img'>
                             <img src={User3} className='img-fluid' alt="user3" />
                        </div>
                        <p> Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque</p>
                        <div className='item_rating mb-2'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>By Mohan Sharma</h5>
                     </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                     <Carousel.Caption>
                        <div className='user-img'>
                             <img src={User4} className='img-fluid' alt="user4" />
                        </div>
                        <p> Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque</p>
                        <div className='item_rating mb-2'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                        <h5>By Mohan Sharma</h5>
                     </Carousel.Caption>
                   </Carousel.Item>
                  </Carousel>
             </Container>
       </section>
    </>
  )
}
