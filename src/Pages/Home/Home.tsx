import React, { FC, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllListProducts, setPage } from '../../store/slices/shopeSlices';
import Output from '../../components/Output/Output';
import s from './Home.module.css'
import Pagination from '@mui/material/Pagination';
import Category from '../../components/Category/Category';

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const { page, totalPages, loading } = useAppSelector(state => state.shop)

    useEffect(() => {
        dispatch(getAllListProducts(page));
    }, [dispatch, page]);



    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };
    return (
        <div className={s.home}>
            <Category />
            <div className={s.wrap}>
                <Output />
                <Pagination
                    className={s.pagin}
                    count={totalPages}
                    shape="rounded"
                    page={page}
                    onChange={handleChange} />
            </div>
        </div>
    );
};

export default Home;