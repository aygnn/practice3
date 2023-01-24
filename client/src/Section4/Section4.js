import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import './Section4.scss';


export default function Section4() {
  return (
    <div>
        <Container>
        <div className='section2 section4'>
      <div>

      <p>Popular Item in the market</p>
      <h2>Best  <span>Sellers</span></h2>
      </div>
    </div>

              <div className='cards main4'>
                  <div className='cardd' >
                      <Row>
                          <Col sm={8}>
                              <div className='card1'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <p>Beauty</p>
                                  <h3>Women Freshwash</h3>
                                  <p>$150.00 </p>

                              </div>
                          </Col>

                      </Row>

                  </div>

                  <div className='cardd' >
                      <Row>
                          <Col sm={8}>
                              <div className='card1'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <p>Beauty</p>
                                  <h3>Women Freshwash</h3>
                                  <p>$150.00 </p>

                              </div>
                          </Col>

                      </Row>

                  </div>


                  <div className='cardd' >
                      <Row>
                          <Col sm={8}>
                              <div className='card1'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/product/product1.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <p>Beauty</p>
                                  <h3>Women Freshwash</h3>
                                  <p>$150.00 </p>

                              </div>
                          </Col>

                      </Row>

                  </div>


                  <div className='cardd' >
                      <Row>
                          <Col sm={8}>
                              <div className='card1'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <p>Beauty</p>
                                  <h3>Women Freshwash</h3>
                                  <p>$150.00 </p>

                              </div>
                          </Col>

                      </Row>

                  </div>



              </div>

             


              
                 
              

             
             
          
        </Container>
    </div>
  )
}
