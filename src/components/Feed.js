import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Feed.css'
import Button from 'react-bootstrap/Button'

const Feed = () => {
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
                    <div><Button className='float-right btn-sm' variant="primary">Post</Button></div>

                </Card.Body>
            </Card>

            <Card className='feed-card mt-4 border-0'>
                <Card.Body>
                    <Card.Title>Ryan Sheng</Card.Title>
                    <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>1 min.</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Row>
                        <Col className='text-center'><div className="post-action love-btn"><i class="bi bi-heart"></i></div></Col>
                        <Col className='text-center'><div className="post-action comment-btn"><i class="bi bi-chat"></i></div></Col>
                        <Col className='text-center'><div className="post-action share-btn"><i class="bi bi-share"></i></div></Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className='feed-card mt-4 border-0'>
                <Card.Body>
                    <Card.Title>John Ceng</Card.Title>
                    <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>11 min.</Card.Subtitle>
                    <Card.Text>
                        Morbi nibh nunc, convallis in viverra at, ullamcorper at ipsum. Phasellus varius sapien eget est elementum sodales. Maecenas volutpat ut turpis ut consectetur.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Row>
                        <Col className='text-center'><div className="post-action love-btn"><i class="bi bi-heart"></i></div></Col>
                        <Col className='text-center'><div className="post-action comment-btn"><i class="bi bi-chat"></i></div></Col>
                        <Col className='text-center'><div className="post-action share-btn"><i class="bi bi-share"></i></div></Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className='feed-card mt-4 border-0'>
                <Card.Body>
                    <Card.Title>Jeron Teng</Card.Title>
                    <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>20 min.</Card.Subtitle>
                    <Card.Text>
                        Cras rhoncus laoreet finibus. Nam vel nisi semper, laoreet tellus quis, scelerisque risus. Fusce scelerisque, odio ac consequat dapibus, velit massa feugiat mi, mollis porttitor dui est a arcu. Integer malesuada libero nibh, et tempus elit placerat at. Etiam maximus, ligula ac pellentesque imperdiet, ante libero tempor tellus, id semper nisi tortor vel orci. Pellentesque commodo ex elit, sed tincidunt tortor ullamcorper vitae.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Row>
                        <Col className='text-center'><div className="post-action love-btn"><i class="bi bi-heart"></i></div></Col>
                        <Col className='text-center'><div className="post-action comment-btn"><i class="bi bi-chat"></i></div></Col>
                        <Col className='text-center'><div className="post-action share-btn"><i class="bi bi-share"></i></div></Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className='feed-card mt-4 border-0'>
                <Card.Body>
                    <Card.Title>Robert Uwu</Card.Title>
                    <Card.Subtitle className='text-muted' style={{ fontSize: '10pt' }}>11 min.</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit purus eu magna aliquam, non rhoncus dolor mattis. Integer at feugiat orci. Ut consectetur nunc sed nulla malesuada dictum. Suspendisse vitae facilisis nibh. Donec gravida, nunc a hendrerit interdum, purus quam ultricies arcu, cursus suscipit massa tortor ac justo. In ut feugiat ex. Vivamus rutrum, libero ac suscipit dignissim, ligula turpis gravida mauris, vitae interdum enim ante at magna.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Row>
                        <Col className='text-center'><div className="post-action love-btn"><i class="bi bi-heart"></i></div></Col>
                        <Col className='text-center'><div className="post-action comment-btn"><i class="bi bi-chat"></i></div></Col>
                        <Col className='text-center'><div className="post-action share-btn"><i class="bi bi-share"></i></div></Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Feed