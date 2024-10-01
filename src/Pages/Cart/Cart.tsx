import React, { FC } from 'react';
import s from './Cart.module.css';
import { useAppSelector, useAppDispatch } from '../../hooks';
import CartItem from '../../components/CartItem/CartItem';
import { minusCount, plusCount, removeProduct } from '../../store/slices/cartSlice';

const Cart: FC = () => {
    const { cart } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const sumOfOrder = () => {
        if (!cart || !cart.length) return 0;
        return cart.reduce((sum, el) => {
            return sum += el.price * el.count;
        }, 0);
    };


    const sumOfDiscount = () => {
        if (!cart || !cart.length) return 0;
        return cart.reduce((sum, el) => {
            return sum += Math.round((el.price * (el.discount / 100)) * el.count);
        }, 0);
    };


    const subtotalWithDiscount = () => {
        return sumOfOrder() - sumOfDiscount();
    };

    return (
        <div className={s.cartContainer}>
            <div>
                {
                    cart.length > 0 ?
                        cart.map(el => (
                            <CartItem key={el.id} {...el} />
                        ))
                        :
                        <h2>Your cart is empty.</h2>
                }
            </div>

            {cart.length > 0 && (
                <div className={s.rightWrap}>
                    <h3 className={s.h3}>Order Summary</h3>
                    <p className={s.rightText}>Price:
                        <span className={s.cartPrice}>${sumOfOrder()}</span>
                    </p>
                    <p className={s.rightText}>Delivery:
                        <span className={s.cartDelivery}>Free</span>
                    </p>
                    <p className={s.rightDisc}>Discount:
                        <span className={s.cartDescount}>-${sumOfDiscount()}</span>
                    </p>
                    <div className={s.line}></div>
                    <div className={s.totalWrap}>
                        <h3 className={s.totalText}>Subtotal:</h3>
                        <p className={s.totalPrice}>${subtotalWithDiscount()}</p>
                    </div>
                    <button className={s.rightBtn}>Proceed to pay</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
