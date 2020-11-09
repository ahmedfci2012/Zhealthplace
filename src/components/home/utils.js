import {
  PermissionsAndroid,
} from 'react-native';

let permissionDenied = {};
let askingForPermission = false;

export const requestPermission = async (perm) => {
  if (permissionDenied[perm] || askingForPermission) {
    return false;
  }
  try {
    askingForPermission = true;
    const alreadyGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS[perm]
    );
    if (alreadyGranted) {
      return true;
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[perm]
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      permissionDenied[perm] = true;
      return false;
    }
  } catch (err) {
    console.warn(err);
  } finally {
    askingForPermission = false;
  }
}