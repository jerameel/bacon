import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { bleActions } from 'store/ble';

import { HomeGeneratedProps, HomePublicProps } from './Home.props';
import HomeView from './Home.view';

const HomeScreen = (props: HomePublicProps) => {
  const dispatch = useDispatch();
  const bleState = useSelector((state: RootState) => state.ble);

  const onSelectItem = (item: { id: string; name: string }) => {
    if (
      bleState.status === 'IDLE' ||
      (bleState.status === 'CONNECTED' && bleState.connection.UUID === item.id)
    ) {
      props.navigation.navigate('CONNECT', { id: item.id, name: item.name });
    }
  };

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
    devices: bleState.devices,
    onSelectItem,
  };
  return <HomeView {...props} {...generatedProps} />;
};

export default HomeScreen;
