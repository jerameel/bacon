import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { bleActions } from 'store/ble';

import { ConnectGeneratedProps, ConnectPublicProps } from './Connect.props';
import ConnectView from './Connect.view';

const ConnectScreen = (props: ConnectPublicProps) => {
  const dispatch = useDispatch();
  const id = props.route.params.id || '';
  const bleState = useSelector((state: RootState) => state.ble);
  const connecting = bleState.status === 'CONNECTING';
  const connected = bleState.status === 'CONNECTED';
  const [initialized, setInitialized] = useState(false);

  const controllers = useSelector((state: RootState) => state.controls);

  const disconnect = () => {
    if (id) {
      dispatch(bleActions.disconnect(id));
    }
    setInitialized(false);
    props.navigation.goBack();
  };

  useEffect(() => {
    if (bleState.status === 'IDLE' && id) {
      dispatch(bleActions.connect(id));
      setInitialized(true);
    } else if (id !== bleState.connection.UUID) {
      props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generatedProps: ConnectGeneratedProps = {
    connecting,
    connected,
    disconnect,
    initialized,
    controllers,
  };

  return <ConnectView {...props} {...generatedProps} />;
};

export default ConnectScreen;
