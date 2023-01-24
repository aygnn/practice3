import React from 'react'
import './Section1.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Section1() {
  return (
    <div>
      <div className='section1'>

     
   
      <Row>
        <Col sm={4} className='mavi'>
          <img src='https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp'/>
        </Col>
        <Col sm={8} className='gray'>
          <div>
            <h4>Shop is fun</h4>
            <h1>BROWSE OUR PREMIUM PRODUCT</h1>
            <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
            <button>Browse Now</button>
          </div>
        </Col>
      </Row>
      </div>


      <div className='karusel'>

        <Row>
          <Col sm={4}>
            <img src='https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp'/>
          </Col>
          <Col sm={4}>
            <img src='https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp'/>
          </Col><Col sm={4}>
            <img src='https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png.webp'/>
          </Col>


        </Row>
      </div>

    </div>
  )
}
