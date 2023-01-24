import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { BsArrowRight } from 'react-icons/bs';


import './Section5.scss';


export default function Section5() {
  return (
    <div>
        <Container>
        <div className='section2'>
      <div>

      <p>Popular Item in the market</p>
      <h2>Trending  <span>Product</span></h2>
      </div>
    </div>


    <div>
        <div className='kart'>
    <div className=' news' >
                      <Row>
                          <Col sm={8}>
                              <div className='cardone'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <div>
                                    <p>By Admin</p>
                                    <p><TfiCommentsSmiley/> 2 Comments</p>
                                  </div>
                                  <h4>The Richland Center Shooping News and weekly shooper</h4>
                                  <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth. </p>
                                    <a>Read More <BsArrowRight/></a>
                              </div>
                          </Col>

                      </Row>

                  </div>



                  <div className=' news' >
                      <Row>
                          <Col sm={8}>
                              <div className='cardone'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <div>
                                    <p>By Admin</p>
                                    <p><TfiCommentsSmiley/> 2 Comments</p>
                                  </div>
                                  <h4>The Richland Center Shooping News and weekly shooper</h4>
                                  <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth. </p>
                                    <a>Read More <BsArrowRight/></a>
                              </div>
                          </Col>

                      </Row>

                  </div>


                  <div className=' news' >
                      <Row>
                          <Col sm={8}>
                              <div className='cardone'>

                                  <img src='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp' />
                              </div>
                          </Col>
                          <Col sm={4}>
                              <div>
                                  <div>
                                    <p>By Admin</p>
                                    <p><TfiCommentsSmiley/> 2 Comments</p>
                                  </div>
                                  <h4>The Richland Center Shooping News and weekly shooper</h4>
                                  <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth. </p>
                                    <a>Read More <BsArrowRight/></a>
                              </div>
                          </Col>

                      </Row>

                  </div> 

        </div>
    </div>
        </Container>
    </div>
  )
}
