import React, { FC, useState } from 'react';
import s from './AddToCart.module.css'
import { IProductInCart } from '../../store/modules';
import { getLSCart, setLSCart } from '../../LS';
import { useAppDispatch } from '../../hooks';
import { setCartArr } from '../../store/slices/cartSlice';

interface AddToCartProps {
    item: IProductInCart;
}


const AddToCart: FC<AddToCartProps> = ({ item }) => {
    const dispatch = useAppDispatch()
    const [count, setCount] = useState<number>(1)


    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const addProduct = () => {
        let all_product: IProductInCart[] = getLSCart('cart') || []
        const product: IProductInCart = {
            ...item,
            count
        }
        let one_elem = all_product.find(el => el.id === item.id)
        if (one_elem) {
            one_elem.count = (one_elem.count || 0) + count;
        } else {
            all_product.push(product)
        }
        setCount(1)
        setLSCart('cart', all_product)
        dispatch(setCartArr(all_product))
    }


    return (
        <div>
            <div className={s.btnWrap}>
                <button className={s.minus} disabled={count == 1 ? true : false} onClick={decrement}>-</button>
                <p className={s.spanCart}>{count}</p>
                <button className={s.plus} onClick={increment}>+</button>
                <button className={s.remove} onClick={addProduct}>Add to cart</button>
            </div>
        </div>
    );
};

export default AddToCart;