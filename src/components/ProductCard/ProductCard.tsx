import React, { FC } from 'react';
import { Product } from '../../store/modules/index';
import { Link } from 'react-router-dom';
import s from './ProductCard.module.css'

const ProductCard: FC<Product> = ({ discount, id, image, price, title }) => {
    const discountedPrice = discount ? Math.round(price - ((discount / 100) * price)) : price;

    return (
        <Link to={`/detail-product/?productId=${id}`} className={s.link}>
            <img src={image} alt={title} className={s.img} />
            <p className={s.title}>{title}</p>
            <div className={s.wrap}>
                {discount ? (
                    <>
                        <p className={s.price}>${price}</p>
                        <p className={s.discountPrice}>
                            <span className={s.span}>$</span>
                            {discountedPrice}
                        </p>
                        <p className={s.discountLabel}>{discount}%</p>
                        <p className={s.off}>off</p>
                    </>
                ) : (
                    <p className={s.discountPrice}>
                        <span className={s.span}>$</span>
                        {price}
                    </p>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;