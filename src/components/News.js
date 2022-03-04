import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import '../News.css'
import topicicon from '../ig/trending-topic-icon.png'
import newanime from '../ig/topic-1.png'

const News = () => {
    return (
        <>
            <ListGroup className='anime-news'>
                <ListGroup.Item className='anime-news-item'>
                    <img
                        src={topicicon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: '10px' }}
                    />
                    <b>Trending Anime Topic</b>
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>Attack on Titan</span>
                        <div><b>#AttackOnTitanFinalSeason2</b></div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>10,000 Posts</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>86</span>
                        <div><b>#86Season2</b></div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>6,000 Posts</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>My Dress Up Darling</span>
                        <div><b>#Gojo</b></div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>3,000 Posts</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>Attack on Titan</span>
                        <div><b>#AttackOnTitanGrowl</b></div>
                        <span className='text-muted' style={{ fontSize: '10pt' }}>32,000 Posts</span>
                    </div>
                </ListGroup.Item>
            </ListGroup>
            <hr style={{ width: '55%' }} />
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
                    <b>New Anime</b>
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
        </>
    )
}

export default News