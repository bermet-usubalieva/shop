import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import ProductCard from '../ProductCard/ProductCard';
import s from './Output.module.css'

const Output: FC = () => {
    const { loading, shop } = useAppSelector(state => state.shop)

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={s.output}>
            {
                shop.length > 0 ?
                    shop.map(product => <ProductCard key={product.id} {...product} />)
                    :
                    <h2>Not Found!</h2>
            }
        </div>
    );
};

export default Output;