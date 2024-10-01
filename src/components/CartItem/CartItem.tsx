import React, { FC } from 'react';
import s from './CartItem.module.css'
import { IProductInCart } from '../../store/modules';
import { useAppDispatch } from '../../hooks';
import { minusCount, plusCount, removeProduct } from '../../store/slices/cartSlice';



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
        <div className={s.wrap}>
            <div className={s.leftWrap}>
                <div className={s.imgWrap}>
                    <img src={image} alt={title} className={s.img} />
                </div>
                <div className={s.textWrap}>
                    <p className={s.title}>{title}</p>
                    <p className={s.discountPrice}>color: {color}</p>
                    <p className={s.discountPrice}>price:
                        <span className={s.span}>$</span>
                        {price}
                    </p>
                    <p className={s.textGreen}>In Stock</p>
                    <div className={s.btnWrap}>
                        <p className={s.btnWrapTitile}>Qty:</p>
                        <button className={s.minus} disabled={count === 1 ? true : false} onClick={decrement}>-</button>
                        <p className={s.spanCart}>{count}</p>
                        <button className={s.plus} onClick={increment}>+</button>
                        <button className={s.remove} onClick={deleteProduct}>remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;