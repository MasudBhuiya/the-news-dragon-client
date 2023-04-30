import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './LeftNav/LeftNav';
import RigntNav from '../pages/Shared/RightNav/RigntNav';
// import Category from '../pages/Home/Category/Category';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><RigntNav></RigntNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;