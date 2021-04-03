import { Platform, PermissionsAndroid } from 'react-native';
import BleManager from 'react-native-ble-manager';
import pathOr from 'ramda/src/pathOr';

const start = async () => {
  try {
    await BleManager.start({ showAlert: false });
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      const permissionAllowed = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (!permissionAllowed) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('PERMISSION DENIED: ACCESS_COARSE_LOCATION');
          return false;
        }
      }
      return true;
    }
    return false;
  } catch (e) {
    console.log('services/ble(start): ', e);
    return false;
  }
};

const scan = async () => {
  try {
    await BleManager.scan([], 5, true);
    return true;
  } catch (e) {
    console.log('services/ble(scan): ', e);
    return false;
  }
};

const stopScan = async () => {
  try {
    await BleManager.stopScan();
    return true;
  } catch (e) {
    console.log('services/ble(stop): ', e);
    return false;
  }
};

const connect = async (
  id: string,
): Promise<
  | {
      serviceUUID: string;
      characteristicUUID: string;
    }
  | boolean
> => {
  try {
    await BleManager.connect(id);
    const peripheralInfo = await BleManager.retrieveServices(id);
    const characteristicData = pathOr<any>(
      [],
      ['characteristics'],
      peripheralInfo,
    ).find((characteristic: any) => {
      const { Notify, Read, Write } = characteristic.properties;
      return Notify && Read && Write;
    });
    const serviceUUID = characteristicData.service;
    const characteristicUUID = characteristicData.characteristic;
    await BleManager.startNotification(id, serviceUUID, characteristicUUID);
    await BleManager.requestConnectionPriority(id, 1);
    return {
      serviceUUID,
      characteristicUUID,
    };
  } catch (e) {
    console.log('services/ble(connect): ', e);
    return false;
  }
};

const disconnect = async (id: string) => {
  try {
    await BleManager.disconnect(id);
    return true;
  } catch (e) {
    console.log('services/ble(disconnect): ', e);
    return false;
  }
};

export default {
  start,
  scan,
  stopScan,
  connect,
  disconnect,
};
