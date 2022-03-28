import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'

const Videos = () => {
    return (
        <Container>
            <Card className='feed-card mt-4 border-0'>
                <Card.Body>
                    <Card.Title>Ryan Sheng</Card.Title>
                    <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>1 min.</Card.Subtitle>
                    <Card.Text className='mt-2'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <hr />
                    <div className='post-engagement mb-5'>
                        <span className='float-start'><small>100K Likes</small></span>
                        <span className='float-end'><small>2000 shares</small></span>
                        <span className='float-end' style={{ marginRight: '10px' }}><small>2M Comments</small></span>
                    </div>
                    <Row>
                        <Col className='text-center'>
                            <div className="post-action love-btn">
                                <i class="bi bi-heart"></i>
                            </div>
                        </Col>
                        <Col className='text-center'>
                            <div className="post-action comment-btn">
                                <i class="bi bi-chat"></i>
                            </div>
                        </Col>
                        <Col className='text-center'>
                            <div className="post-action share-btn">
                                <i class="bi bi-share"></i>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Videos