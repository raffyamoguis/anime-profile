import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import '../Friends.css'
import avatar1 from '../ig/avatar-1.png'

const Friends = () => {
    return (
        <>
            <ListGroup className='anime-news'>
                <ListGroup.Item className='anime-news-item'>
                    <b style={{ color: '#2f4858' }}>Friends</b>
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <img
                        src={avatar1}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: '10px' }}
                    />

                    Ryan Sheng

                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <img
                        src={avatar1}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: '10px' }}
                    />
                    John Ceng
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <img
                        src={avatar1}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: '10px' }}
                    />
                    Jeron Teng
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>
                    <img
                        src={avatar1}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                        style={{ marginRight: '10px' }}
                    />
                    Robert Uwu
                </ListGroup.Item>
                <ListGroup.Item className='anime-news-item'>

                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default Friends