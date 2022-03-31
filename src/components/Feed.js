import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from './utli/Post'
import '../Feed.css'
import Button from 'react-bootstrap/Button'
import Data from './Data'

const Feed = () => {
    const likeClick = (name) => {
        console.log(name.name)
    }
    return (
        <>
            <Card className='create-post-card mt-2 border-0'>
                <Card.Body>
                    <Card.Title>Create Post</Card.Title>
                    <Form className='mt-3'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control className='post-content shadow-none border-0' as="textarea" placeholder="What happened?" rows={3} />
                        </Form.Group>
                    </Form>
                    <div><Button className='float-right btn-sm btn-primary'>Post</Button></div>

                </Card.Body>
            </Card>

            {Data.posts.map((post) => (
                <Post name={post.name} min={post.min} content={post.content} withVideo={post.withVideo} vidsrc={post.vidsrc} likes={post.likes} comments={post.comments} shares={post.shares} onLike={likeClick} />
            ))}
        </>
    )
}

export default Feed