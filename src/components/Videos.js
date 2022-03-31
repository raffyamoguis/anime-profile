import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { Player, BigPlayButton } from 'video-react';
import video from '../vid/videoplayback (2).mp4'

const Videos = () => {
    return (
        <Container>
            <Card className='feed-card mt-4 border-0'>
                <Card.Body>
                    <Card.Title>Ryan Sheng</Card.Title>
                    <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>1 min.</Card.Subtitle>
                    <Card.Text className='mt-2'>
                        Raiden Shogon Uwu...
                    </Card.Text>
                    <Player className='mt-2' src={video}>
                        <BigPlayButton position="center" />
                    </Player>
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