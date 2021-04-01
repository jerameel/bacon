import { Platform, PermissionsAndroid } from 'react-native';
import BleManager from 'react-native-ble-manager';

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

export default {
  start,
  scan,
  stopScan,
};
