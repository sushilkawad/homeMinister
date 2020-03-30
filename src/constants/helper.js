import AsyncStorage from '@react-native-community/async-storage';
import {baseURL, consumerKey, consumerSecret} from './config';

export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function setPersistData(key, value) {
  console.log('persistt::', key, value);
  AsyncStorage.setItem(key, value);
}

export function removePersistData(key) {
  AsyncStorage.removeItem(key);
}

export function getPersistData(key) {
  return AsyncStorage.getItem(key);
}

export function setPersistDataList(data) {
  Object.keys(data).forEach(key => setPersistData(key, data[key]));
}

export function getURL(endpoint, queryStrings = {}) {
  let qS = Object.keys(queryStrings).map(key => `${key}=${queryStrings[key]}`);

  return `${baseURL}${endpoint}?${qS.join(
    '&',
  )}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
}
