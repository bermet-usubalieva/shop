import React, { FC, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useAppDispatch } from '../../hooks';
import { getAllListProducts } from '../../store/slices/shopeSlices';
import Output from '../../components/Output/Output';
import s from './Home.module.css'

const Home: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllListProducts())
    }, [dispatch])
    return (
        <div className={s.home}>
            <Header />
            <Output />
        </div>
    );
};

export default Home;