import {
  SET_MAIN_PAGE_SELECT_DATA_SOURCE,
  SET_MAIN_PAGE_SELECT_2_DATA_SOURCE,
  SET_MAIN_PAGE_SELECT_3_DATA_SOURCE,
} from '../constants';

const defaultState = {
  selectDataSource: [],
  select2DataSource: [],
  select3DataSource: [],
};

const mainPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MAIN_PAGE_SELECT_DATA_SOURCE:
      return {
        ...state,
        selectDataSource: action.param,
      };
    case SET_MAIN_PAGE_SELECT_2_DATA_SOURCE:
      return {
        ...state,
        select2DataSource: action.param,
      };
    case SET_MAIN_PAGE_SELECT_3_DATA_SOURCE:
      return {
        ...state,
        select3DataSource: action.param,
      };
    default:
      return state;
  }
};

export default mainPage;
