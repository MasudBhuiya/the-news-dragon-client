import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla soluta ullam non, iste mollitia quibusdam omnis debitis illum doloribus!</p>
            <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;