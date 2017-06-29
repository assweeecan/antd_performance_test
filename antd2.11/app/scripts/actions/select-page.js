import makeActionCreator from '../utils/make-action-creator';
import sleep from '../utils/sleep-promise';

import uuidv4 from 'uuid/v4';

import {
  SET_SELECT_PAGE_SELECT_DATA_SOURCE,
  SET_SELECT_PAGE_SELECT_2_DATA_SOURCE,
  SET_SELECT_PAGE_SELECT_3_DATA_SOURCE,
} from '../constants';

export const setSelectDataSource = makeActionCreator(SET_SELECT_PAGE_SELECT_DATA_SOURCE, 'param');
export const setSelect2DataSource = makeActionCreator(SET_SELECT_PAGE_SELECT_2_DATA_SOURCE, 'param');
export const setSelect3DataSource = makeActionCreator(SET_SELECT_PAGE_SELECT_3_DATA_SOURCE, 'param');

export function fetchGetSelectDataSource() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(300);
    const dataSource = [];
    for (let key = 0; key < 1000; key++) {
      dataSource.push(uuidv4());
    }

    dispatch(setSelectDataSource(dataSource));
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

    dispatch(setSelect2DataSource(dataSource));
  };
}

export function fetchGetSelect3DataSource() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(500);
    const dataSource = [];
    for (let key = 0; key < 1000; key++) {
      dataSource.push(uuidv4());
    }

    dispatch(setSelect3DataSource(dataSource));
  };
}

export function init() {
  return async (dispatch) => {
    dispatch(fetchGetSelectDataSource());
    dispatch(fetchGetSelect2DataSource());
    dispatch(fetchGetSelect3DataSource());
  };
}
