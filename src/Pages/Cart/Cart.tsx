import React, { FC } from 'react';
import s from './Cart.module.css'
import { useAppSelector } from '../../hooks';
import CartItem from '../../components/CartItem/CartItem';

const Cart: FC = () => {
    const { cart } = useAppSelector(state => state.cart)


    const sumOfOrder = () => {
        if (!cart.length) return
        return cart.reduce((sum, el) => {
            return sum += el.price * el.count
        }, 0)
    }
    return (
        <div>
            <div>
                {
                    cart.length > 0 ?
                        cart.map(el => <CartItem key={el.id} {...el} />)
                        :
                        <h2>Your cart is empty.</h2>
                }
            </div>
            {
                cart.length > 0 &&
                <button>procced to pay {sumOfOrder()}</button>
            }
        </div>
    );
};

export default Cart;