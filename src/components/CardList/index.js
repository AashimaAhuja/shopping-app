import React from 'react';
import Card from '../Card';

import './style.css';

const CardList = ({products,onProductLike}) => {
    return (
        <div className='productList'>
            {products && products.map(product => <Card product={product} key={product.id} onProductLike={onProductLike}/>)}
        </div>
    )
}

export default CardList;