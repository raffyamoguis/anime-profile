import React from 'react'
import Container from 'react-bootstrap/Container'
import News from './News'
import Feed from './Feed'
import Friends from './Friends'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import $ from 'jquery'

export default class Content extends React.Component {
    hideFriendsList = () => {
        var x = window.matchMedia("(max-width: 991px");
        myFunction(x);
        x.addListener(myFunction);

        function myFunction(x) {

            if (x.matches) {
                $('.friends').hide()

            } else {
                $('.friends').show()
            }
        }
    }
    componentDidMount() {
        this.hideFriendsList();
    }
    render() {
        return (
            <Container>
                <Row style={{ height: '100vh' }}>
                    <Col sm={3} className='mt-2'>
                        <News />
                    </Col>
                    <Col sm={6} style={{ overflowY: 'auto', height: '100%' }}><Feed /></Col>
                    <Col sm={3} className='mt-2 friends'><Friends /></Col>
                </Row>
            </Container>
        )
    }
}

// const Content = () => {
//     return (
//         <Container>
//             <Row style={{ height: '100vh' }}>
//                 <Col sm={3} className='mt-2'>
//                     <News />
//                 </Col>
//                 <Col sm={6} style={{ overflowY: 'auto', height: '100%' }}><Feed /></Col>
//                 <Col sm={3} className='mt-2 friends'><Friends /></Col>
//             </Row>
//         </Container>
//     )
// }

// export default Content