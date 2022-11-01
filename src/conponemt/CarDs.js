import React from 'react'
import { Button, Card } from 'react-bootstrap'
import img from './jump.jpg'
import './CarDs.css'



const CarDs = () => {
    return (
        <div className='Navs'>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="success">Success</Button>
                </Card.Body>
            </Card>
            ;
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="success">Success</Button>
                </Card.Body>
            </Card>
            ;
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="success">Success</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CarDs