import React from 'react';
import {Col, Card} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function MenuCard({image, rating ,title ,paragraph, price, renderRatingIcons}) {
  return (
    <>
      <Col sm={0} lg={4} xl={3} md={6} className='mb-4'>
         <Card className="overflow-hidden product-card">
           <div className='overflow-hidden'>
             <Card.Img variant="top" src={image}/>
           </div>
            <Card.Body>
               <div className='d-flex align-item-center justify-content-between'>
                 <div className='item_rating'>{renderRatingIcons(rating)}</div>
                 <div className='wishlist'>
                    <i className="bi bi-heart"></i>
                 </div>
               </div>
               <Card.Text>
                   {title}
               </Card.Text>
               <div>
                <p className="product-desc">{paragraph}</p>
               </div>
               <div className='d-flex align-item-center justify-content-between'>
                    <div className='menu_price'>
                        <h5 className='mb-0'>${price}</h5>
                    </div>
                    <div className='add_to_card'>
                        <Link to="/"><i className="bi bi-bag me-2"></i> Add to Card</Link>
                    </div>
               </div>
            </Card.Body>
         </Card>
      </Col>
    </>
  )
}
