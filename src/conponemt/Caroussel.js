import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import "./Caroussel.css"




const Caroussel = () => {
    return (
        <div className='Carou'>




            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_zPWHNjfnt5IscT0MntCT8tMOBvLzpE18g&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGpaG4km3mOsghkZTeFeHi79PXmo8Yti9UA&usqp=CAU"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv4E1aGp8WaPOfgZfrG4HcjMhaz1Vsa0aFw&usqp=CAU"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            ;

        </div>
    )
}

export default Caroussel