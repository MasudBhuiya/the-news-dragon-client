import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css'

const RigntNav = () => {
    return (
        <div>
            <h3 className='mt-4'>Login With</h3>
            <Button className='m-1' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button className='m-1' variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h3 className='mt-4'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='background '>
        {/* <img src={bg} alt="" /> */}
        <h2 className='text-white text-center pt-4'>Create an Amazing Newspaper</h2>
        <p className='text-white text-center pt-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <div className='text-center '>
        <Button className='mb-4' variant="danger">Learn More</Button>
        </div>
            </div>
        </div>
    );
};

export default RigntNav;