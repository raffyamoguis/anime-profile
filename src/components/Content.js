import Container from 'react-bootstrap/Container'
import News from './News'
import Feed from './Feed'
import Friends from './Friends'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = () => {
    return (
        <Container>
            <Row style={{ height: '100vh' }}>
                <Col sm={3} className='mt-2'>
                    <News />
                </Col>
                <Col sm={6} style={{ overflowY: 'auto', height: '100%' }}><Feed /></Col>
                <Col sm={3} className='mt-2'><Friends /></Col>
            </Row>
        </Container>
    )
}

export default Content