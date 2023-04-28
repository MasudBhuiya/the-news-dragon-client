import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './LeftNav/LeftNav';
import RigntNav from '../pages/Shared/RightNav/RigntNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><h2>Main content coming...</h2></Col>
                    <Col lg={3}><RigntNav></RigntNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;