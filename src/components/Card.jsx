import React from 'react';
import { Card } from 'react-bootstrap';

function ImageAndTextExample() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
            <div className="max-w-screen-lg mx-auto">
                <div className="md:flex md:flex-wrap md:-mx-4">
                    <div className="md:w-full md:px-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="md:w-1/3 md:px-4 mb-4">
                        <Card border="primary">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="md:w-1/3 md:px-4 mb-4">
                        <Card border="secondary">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Secondary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="md:w-1/3 md:px-4 mb-4">
                        <Card border="success">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Success Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="md:w-full md:px-4 mb-4">
                        <Card className="bg-dark text-white">
                            <Card.Img src="holder.js/100px270" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageAndTextExample;
