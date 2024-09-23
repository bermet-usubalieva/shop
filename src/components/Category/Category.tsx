import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllCategories } from '../../store/slices/categorySlice';
import { getAllListProducts, getProductByCateg, getProductBySort } from '../../store/slices/shopeSlices';
import s from './Category.module.css';

const Category: FC = () => {
    const dispatch = useAppDispatch();
    const { categories, error, loading } = useAppSelector(state => state.category);
    const { page } = useAppSelector(state => state.shop)

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSort, setSelectedSort] = useState<string>('all');

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        dispatch(getProductByCateg(category));
    };

    const handleAllClick = () => {
        setSelectedCategory(null);
        dispatch(getAllListProducts(page));
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortValue = event.target.value;
        setSelectedSort(sortValue);

        if (selectedCategory) {
            dispatch(getProductBySort({ category: selectedCategory, pop: sortValue }));
        }
    };

    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className={s.section}>
            <h2 className={s.h2}>Categories</h2>
            <button onClick={handleAllClick} className={!selectedCategory ? s.active : ''}>
                All
            </button>
            {categories.map(el => (
                <button
                    key={el}
                    onClick={() => handleCategoryClick(el)}
                    className={selectedCategory === el ? s.active : ''}
                >
                    {el}
                </button>
            ))}
            <select value={selectedSort} onChange={handleSortChange} disabled={!selectedCategory}>
                <option value="asc">Cheap</option>
                <option value="desc">Expensive</option>
            </select>
        </section>
    );
};

export default Category;
