import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { startBLEAction } from 'store/ble';

import { HomeGeneratedProps, HomePublicProps } from './Home.props';
import HomeView from './Home.view';

const HomeScreen = (props: HomePublicProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startBLEAction({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const generatedProps: HomeGeneratedProps = {};
  return <HomeView {...props} {...generatedProps} />;
};

export default HomeScreen;
