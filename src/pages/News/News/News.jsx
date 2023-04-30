import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from '../EditorsInsides/EditorsInsides';

const News = () => {
    const news = useLoaderData();
    const {image_url, title, details, _id,category_id} = news;
    console.log(news)
    return (
        <div>
            <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsides></EditorsInsides>
        </div>
    );
};

export default News;