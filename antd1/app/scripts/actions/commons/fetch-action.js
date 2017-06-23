import qs from 'qs';

import makeActionCreator from '../../utils/make-action-creator';
import { SET_ERROR_MODAL_INFO } from '../../constants';

export const setErrorModalInfo = makeActionCreator(SET_ERROR_MODAL_INFO, 'flag', 'title', 'content', 'msgType');

//

export default (url, option, noDeal) => (
  async (dispatch) => {
    const theOption = {};

    let theUrl = url || theOption.url || '';
    const req = {
      ...theOption,
      credentials: 'same-origin',
      method: (theOption.method || 'GET').toUpperCase(),
    };

    req.headers = {
      ...req.headers,
      Accept: 'application/json, text/javascript, */*; q=0.01',
    };

    if (theOption.data) {
      const sendData = theOption.data || {};
      if (req.method === 'GET') {
        if (theUrl.indexOf('?') > -1) {
          theUrl += `&${qs.stringify(sendData)}`;
        } else {
          theUrl += `?${qs.stringify(sendData)}`;
        }
      } else {
        req.headers = {
          ...req.headers,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };

        req.body = qs.stringify(sendData);
      }
    }

    let response = null;
    try {
      response = await window.fetch(theUrl, req);
    } catch (err) {
      window.console.error(err);
      dispatch(setErrorModalInfo(Date.now(), '错误', '网络连接错误'));
      return [];
    }

    if (noDeal) {
      return response;
    }

    if (response.status !== 200) {
      dispatch(setErrorModalInfo(Date.now(), '错误', `网络连接错误，status:${response.status}`));
      return [undefined, response];
    }

    let theData = null;
    try {
      theData = await response.json();
    } catch (err) {
      dispatch(setErrorModalInfo(Date.now(), '错误', '返回结果不是Json字符串'));
      return [undefined, response];
    }

    if (theData.status !== 0) {
      dispatch(setErrorModalInfo(Date.now(), '错误', theData.errMsg));
      return [undefined, response];
    }

    return [theData, response];
  }
);
