import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { bleActions } from 'store/ble';

import { ConnectGeneratedProps, ConnectPublicProps } from './Connect.props';
import ConnectView from './Connect.view';

const ConnectScreen = (props: ConnectPublicProps) => {
  const dispatch = useDispatch();
  const id = props.route.params.id || '';
  const bleState = useSelector((state: RootState) => state.ble);
  const connecting =
    bleState.status === 'CONNECTING' || bleState.status === 'IDLE';
  const connected = bleState.status === 'CONNECTED';

  useEffect(() => {
    if (bleState.status === 'IDLE' && id) {
      dispatch(bleActions.connect(id));
    } else {
      props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generatedProps: ConnectGeneratedProps = {
    connecting,
    connected,
  };

  return <ConnectView {...props} {...generatedProps} />;
};

export default ConnectScreen;
