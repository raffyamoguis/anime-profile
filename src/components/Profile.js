import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Profile.css'
import avatar from '../ig/avatar(1).png'

const Profile = () => {
    return (
        <Container >
            <Card className='mt-2' border='0'>
                <div class="user_profile_cap">

                    <div class="user_profile_cover">
                        <img src="http://1.bp.blogspot.com/_Ym3du2sG3R4/S_-M_kTV9OI/AAAAAAAACZA/SNCea2qKOWQ/s1600/mac+os+x+wallpaper.jpg" alt="img" />
                    </div>

                    <div class="user_profile_headline">
                        <img src={avatar} alt="img" />

                        <h2>John Doe</h2>
                        <span>@johndoe</span>
                    </div>

                </div>
            </Card>
            <Row>
                <Col>
                    <Card className='mt-2' border='0'>
                        <Card.Body>
                            <Card.Title>Profile Information</Card.Title>
                            <hr />
                            <Form className='mt-2'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control className='profile-info shadow-none rounded-0' type="text" placeholder="Full Name" value="John Doe" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className='profile-info shadow-none rounded-0' type="text" placeholder="Username" value="@johndoe" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className='profile-info shadow-none rounded-0' type="text" placeholder="Address" value="Guio-ang Guindulman Bohol" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Save
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='mt-2' border='0'>
                        <Card.Body>
                            <Card.Title>Media</Card.Title>

                            <section class="gallery">
                                <div class="gallery__item">
                                    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector" />
                                    <img class="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt="" />
                                    <label for="img-1" class="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt="" /></label>
                                </div>
                                <div class="gallery__item">
                                    <input type="radio" id="img-2" name="gallery" class="gallery__selector" />
                                    <img class="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt="" />
                                    <label for="img-2" class="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt="" /></label>
                                </div>
                                <div class="gallery__item">
                                    <input type="radio" id="img-3" name="gallery" class="gallery__selector" />
                                    <img class="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt="" />
                                    <label for="img-3" class="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt="" /></label>
                                </div>
                                <div class="gallery__item">
                                    <input type="radio" id="img-4" name="gallery" class="gallery__selector" />
                                    <img class="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt="" />
                                    <label for="img-4" class="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt="" /></label>
                                </div>
                            </section>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile