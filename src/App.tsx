
import React, { FC, useEffect } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { useAppDispatch } from './hooks';
import { getLSCart } from './LS';
import { setCartArr } from './store/slices/cartSlice';

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const data = getLSCart('cart')
    if (data) {
      dispatch(setCartArr(data))
    }
  }, [dispatch])

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;