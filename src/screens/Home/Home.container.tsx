import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { bleActions } from 'store/ble';

import { HomeGeneratedProps, HomePublicProps } from './Home.props';
import HomeView from './Home.view';

const HomeScreen = (props: HomePublicProps) => {
  const dispatch = useDispatch();
  const bleState = useSelector((state: RootState) => state.ble);

  const toggleScan = () => {
    if (bleState.status === 'IDLE') {
      dispatch(bleActions.scan());
    }

    if (bleState.status === 'SCANNING') {
      dispatch(bleActions.stopScan());
    }
  };

  useEffect(() => {
    if (bleState.init.status === 'PENDING') {
      dispatch(bleActions.start());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const generatedProps: HomeGeneratedProps = {
    toggleScan,
    scanning: bleState.status === 'SCANNING',
  };
  return <HomeView {...props} {...generatedProps} />;
};

export default HomeScreen;
