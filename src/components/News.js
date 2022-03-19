import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import '../News.css'
import trending from '../ig/trending.png'
import newanime from '../ig/avatar.png'

const News = () => {
    return (
        <>
            <Card className='border-0'>
                <Card.Body>
                    <ListGroup className='anime-news'>
                        <ListGroup.Item className='anime-news-item'>
                            <img
                                src={trending}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                                style={{ marginRight: '10px' }}
                            />
                            <b style={{ color: '#2f4858' }}>Trending Topic</b>
                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>
                            <div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>Attack on Titan</span>
                                <div>#AttackOnTitanFinalSeason2</div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>10,000 Posts</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>
                            <div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>86</span>
                                <div>#86Season2</div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>6,000 Posts</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>
                            <div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>My Dress Up Darling</span>
                                <div>#Gojo</div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>3,000 Posts</span>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>
                            <div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>Attack on Titan</span>
                                <div>#AttackOnTitanGrowl</div>
                                <span className='text-muted' style={{ fontSize: '10pt' }}>32,000 Posts</span>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>

                    <hr />
                    <ListGroup className='anime-news'>
                        <ListGroup.Item className='anime-news-item'>
                            <img
                                src={newanime}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                                style={{ marginRight: '10px' }}
                            />
                            <b style={{ color: '#2f4858' }}>New Anime</b>
                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>

                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>

                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>

                        </ListGroup.Item>
                        <ListGroup.Item className='anime-news-item'>

                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}

export default News