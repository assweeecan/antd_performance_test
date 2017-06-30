import makeActionCreator from '../utils/make-action-creator';
import sleep from '../utils/sleep-promise';

import uuidv4 from 'uuid/v4';

import {
  SET_TAG_PAGE_TAG_DATA_SOURCE,
  SET_TAG_PAGE_TAG_2_DATA_SOURCE,
} from '../constants';

export const setTagDataSource = makeActionCreator(SET_TAG_PAGE_TAG_DATA_SOURCE, 'param');
export const setTag2DataSource = makeActionCreator(SET_TAG_PAGE_TAG_2_DATA_SOURCE, 'param');


export function fetchGetSelectDataSource() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(300);
    const dataSource = [];
    for (let key = 0; key < 1000; key++) {
      dataSource.push(uuidv4());
    }

    dispatch(setTagDataSource(dataSource.map(e => ({
      label: e.slice(-7),
      value: e,
    }))));
  };
}

export function fetchGetSelect2DataSource() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(400);
    const dataSource = [];
    for (let key = 0; key < 1000; key++) {
      dataSource.push(uuidv4());
    }

    dispatch(setTag2DataSource(dataSource.map(e => ({
      label: e.slice(-7),
      value: e,
    }))));
  };
}


export function init() {
  return async (dispatch) => {
    dispatch(fetchGetSelectDataSource());
    dispatch(fetchGetSelect2DataSource());
  };
}
