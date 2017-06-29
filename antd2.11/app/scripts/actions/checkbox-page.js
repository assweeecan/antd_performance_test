import makeActionCreator from '../utils/make-action-creator';
import sleep from '../utils/sleep-promise';

import uuidv4 from 'uuid/v4';

import {
  SET_CHECKBOX_PAGE_CHECKBOX_DATA_SOURCE,
  SET_CHECKBOX_PAGE_CHECKBOX_2_DATA_SOURCE,
} from '../constants';

export const setCheckboxDataSource = makeActionCreator(SET_CHECKBOX_PAGE_CHECKBOX_DATA_SOURCE, 'param');
export const setCheckbox2DataSource = makeActionCreator(SET_CHECKBOX_PAGE_CHECKBOX_2_DATA_SOURCE, 'param');

export function fetchGetSelectDataSource() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(200);
    const dataSource = [];
    for (let key = 0; key < 500; key++) {
      dataSource.push(uuidv4());
    }

    dispatch(setCheckboxDataSource(dataSource));
  };
}

export function fetchGetSelect2DataSource() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(300);
    const dataSource = [];
    for (let key = 0; key < 500; key++) {
      dataSource.push(uuidv4());
    }

    dispatch(setCheckbox2DataSource(dataSource));
  };
}

export function init() {
  return async (dispatch) => {
    dispatch(fetchGetSelectDataSource());
    dispatch(fetchGetSelect2DataSource());
  };
}
