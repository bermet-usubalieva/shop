import React, { FC } from 'react';
import s from './CartItem.module.css'
import { IProductInCart } from '../../store/modules';
import { useAppDispatch } from '../../hooks';
import { minusCount, plusCount, removeProduct } from '../../store/slices/cartSlice';
import { dirxml } from 'console';


const CartItem: FC<IProductInCart> = ({ color, count, discount, id, image, price, title }) => {
    const dispatch = useAppDispatch()

    const increment = () => {
        dispatch(plusCount(id))
    }

    const decrement = () => {
        dispatch(minusCount(id))
    }

    const deleteProduct = () => {
        dispatch(removeProduct(id))
    }

    return (
        <div>
            <img src={image} alt={title} width={50} />
            <p>{title}</p>
            <p>Color: {color}</p>
            <p>Price: ${price}</p>
            <p>Qty:</p>
            <div>
                <button disabled={count === 1 ? true : false} onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={deleteProduct}>remove</button>
        </div>
    );
};

export default CartItem;