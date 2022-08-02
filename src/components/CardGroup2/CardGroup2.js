import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card2 from '../Card2/Card2';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardGroup2 = () => {
    const products = [
        { id: 1, name: 'laptop', price: 125000 },
        { id: 2, name: 'Mobile', price: 25000 },
        { id: 3, name: 'Watch', price: 1250 },
        { id: 4, name: 'Sunglass', price: 250 },
    ];
    return (
        <div>
            {
                products.map(product => <Card2
                    key={product.id}
                    product={product}></Card2>)
            }
        </div>
    );
};

export default CardGroup2;