import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Player, BigPlayButton } from 'video-react';

const Post = ({ name, min, content, withVideo, vidsrc, likes, comments, shares, onLike }) => {
    return (
        <Card className='feed-card mt-4 border-0'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>{min}</Card.Subtitle>
                <Card.Text className='mt-2'>
                    {content}
                </Card.Text>

                {withVideo ? <><Player className='mt-2' src={vidsrc}>
                    <BigPlayButton position="center" />
                </Player></> : ''}

                <hr />
                <div className='post-engagement mb-5'>
                    <span className='float-start'><small>{likes}</small></span>
                    <span className='float-end'><small>{comments}</small></span>
                    <span className='float-end' style={{ marginRight: '10px' }}><small>{shares}</small></span>
                </div>
                <Row>
                    <Col className='text-center'>
                        <div className="post-action love-btn">
                            <i class="bi bi-heart" onClick={() => onLike({ name })}></i>
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
    )
}

export default Post