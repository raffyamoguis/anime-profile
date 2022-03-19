import React from 'react'
import Container from 'react-bootstrap/Container'
import News from './News'
import Feed from './Feed'
import Friends from './Friends'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import $ from 'jquery'

export default class Content extends React.Component {
    hideFriendsList = (viewport, media) => {
        var x = window.matchMedia(viewport);
        myFunction(x);
        x.addListener(myFunction);

        function myFunction(x) {

            if (x.matches) {
                $(media).hide()

            } else {
                $(media).show()
            }
        }
    }
    hideFriendsListW = (viewport, media) => {
        var x = window.matchMedia(viewport);
        myFunction(x);
        x.addListener(myFunction);

        function myFunction(x) {

            if (x.matches) {
                $(media).hide()
                $('.feed').css('width', '100%')
            } else {
                $(media).show()
            }
        }
    }
    componentDidMount() {
        this.hideFriendsList("(max-width: 991px", '.friends');
        this.hideFriendsList("(max-width: 768px", '.news');
    }
    render() {
        return (
            <Container>
                <Row style={{ height: '100vh' }}>
                    <Col md={4} lg={3} className='mt-4 news'>
                        <News />
                    </Col>
                    <Col sm={12} md={8} lg={6} className='feed mt-2' style={{ overflowY: 'auto', height: '100%' }}><Feed /></Col>
                    <Col lg={3} className='mt-4 friends'><Friends /></Col>
                </Row>
            </Container>
        )
    }
}