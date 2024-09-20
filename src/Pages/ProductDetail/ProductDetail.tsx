import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductById } from '../../store/slices/shopeSlices';
import s from './ProductDetail.module.css';

const ProductDetail: FC = () => {
    const [searchParams] = useSearchParams();
    const [query] = useState(searchParams.get('productId'));
    const dispatch = useAppDispatch();
    const { loading, detail } = useAppSelector(state => state.shop);
    const discountedPrice = detail?.discount ? Math.round(detail?.price - ((detail?.discount / 100) * detail?.price)) : detail?.price;

    useEffect(() => {
        if (query) {
            dispatch(getProductById(`${query}`));
        }
    }, [query, dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={s.productDetail}>
            {detail && (
                <>
                    <img className={s.productImg} width={300} src={detail.image} alt={detail.title} />
                    <div className={s.details}>
                        <h2>{detail.title}</h2>
                        <div className={s.wrap}>
                            {detail.discount ? (
                                <>
                                    <p className={s.price}>${detail.price}</p>
                                    <p className={s.discountPrice}>
                                        <span className={s.span}>$</span>
                                        {discountedPrice}
                                    </p>
                                    <p className={s.discountLabel}>{detail.discount}%</p>
                                    <p className={s.off}>off</p>
                                </>
                            ) : (
                                <p className={s.discountPrice}>
                                    <span className={s.span}>$</span>
                                    {detail.price}
                                </p>
                            )}
                        </div>
                        <div className={s.wrapText}>
                            <p className={s.brand}>Brand:
                                <span className={s.textSpan}>{detail.brand}</span>
                            </p>
                            <p className={s.model}>Model:
                                <span className={s.textSpan}>{detail.model}</span>
                            </p>
                            <p className={s.color}>Color:
                                <span className={s.textSpan}>{detail.color}</span>
                            </p>
                        </div>
                        <p className={s.desrcTitle}>About this product:</p>
                        <p className={s.description}>{detail.description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductDetail;
