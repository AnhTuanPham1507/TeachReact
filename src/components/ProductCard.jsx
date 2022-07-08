import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function ProductCard(props) {
    const {products} =props
    return (
        <Container>
        <Row>
            {
                products.map(p => (

                    <Col>
                            <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://res.cloudinary.com/anhtuanpham1507/image/upload/v1616603933/${p.image}`} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>
                                {p.name}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
            
        ))
            }
        </Row>
    </Container>
    );
}

export default ProductCard;