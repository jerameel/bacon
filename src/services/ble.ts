import { Platform, PermissionsAndroid } from 'react-native';
import BleManager from 'react-native-ble-manager';
import pathOr from 'ramda/src/pathOr';
import { Buffer } from 'buffer';

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
    await BleManager.scan([], 30, true);
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
      characteristics: any[];
      targetWrite?: {
        characteristicUUID?: string;
        serviceUUID?: string;
      };
    }
  | boolean
> => {
  try {
    await BleManager.connect(id);
    const peripheralInfo = await BleManager.retrieveServices(id);
    const characteristics = pathOr<any>(
      [],
      ['characteristics'],
      peripheralInfo,
    );
    const writeCharacteristics = characteristics.filter(
      (c: any) => c.properties.WriteWithoutResponse || c.properties.Write,
    );
    const writeServiceUUID = writeCharacteristics[0]?.service || '';
    const writeCharacteristicUUID =
      writeCharacteristics[0]?.characteristic || '';

    await BleManager.requestConnectionPriority(id, 1);

    return {
      characteristics,
      targetWrite: {
        serviceUUID: writeServiceUUID,
        characteristicUUID: writeCharacteristicUUID,
      },
    };
  } catch (e) {
    console.log('services/ble(connect): ', e);
    return false;
  }
};

const startNotification = async (
  peripheralID: string,
  readServiceUUID: string,
  readCharacteristicUUID: string,
) => {
  try {
    await BleManager.startNotification(
      peripheralID,
      readServiceUUID,
      readCharacteristicUUID,
    );
    return true;
  } catch (e) {
    console.log('services/ble(startNotification): ', e);
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

const sendMessage = async (payload: {
  UUID: string;
  serviceUUID: string;
  characteristicUUID: string;
  message: string;
}) => {
  try {
    await BleManager.writeWithoutResponse(
      payload.UUID,
      payload.serviceUUID,
      payload.characteristicUUID,
      [...Buffer.from(payload.message)],
    );
    return true;
  } catch (e) {
    console.log('services/ble(sendMessage): ', e);
    return false;
  }
};

const readRSSI = async (id: string) => {
  try {
    const rssi = await BleManager.readRSSI(id);
    return rssi;
  } catch (e) {
    console.log('services/ble(readRSSI): ', e);
    return -120; // Unreachable
  }
};

export default {
  start,
  scan,
  stopScan,
  connect,
  disconnect,
  sendMessage,
  readRSSI,
  startNotification,
};
