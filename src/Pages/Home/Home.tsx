import React, { FC, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllListProducts, setPage } from '../../store/slices/shopeSlices';
import Output from '../../components/Output/Output';
import s from './Home.module.css'
import Pagination from '@mui/material/Pagination';

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const { page, totalPages, loading } = useAppSelector(state => state.shop)
    const outputRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        dispatch(getAllListProducts(page));
    }, [dispatch, page]);



    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };
    return (
        <div className={s.home}>
            <Header />
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