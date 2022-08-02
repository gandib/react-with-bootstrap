import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'laptop', price: 125000 },
        { id: 2, name: 'Mobile', price: 25000 },
        { id: 3, name: 'Watch', price: 1250 }
    ];
    return (
        <div>
            <h1>This is My CardGroup</h1>
            <div className="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;