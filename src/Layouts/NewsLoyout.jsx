import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './LeftNav/LeftNav';
import RigntNav from '../pages/Shared/RightNav/RigntNav';
// import Category from '../pages/Home/Category/Category';
import { Outlet } from 'react-router-dom';

const NewsLoyout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RigntNav></RigntNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLoyout;