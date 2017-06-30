import {
  SET_SELECT_PAGE_SELECT_DATA_SOURCE,
  SET_SELECT_PAGE_SELECT_2_DATA_SOURCE,
  SET_SELECT_PAGE_SELECT_3_DATA_SOURCE,
} from '../constants';

const defaultState = {
  selectDataSource: [],
  select2DataSource: [],
  select3DataSource: [],
};

const selectPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECT_PAGE_SELECT_DATA_SOURCE:
      return {
        ...state,
        selectDataSource: action.param,
      };
    case SET_SELECT_PAGE_SELECT_2_DATA_SOURCE:
      return {
        ...state,
        select2DataSource: action.param,
      };
    case SET_SELECT_PAGE_SELECT_3_DATA_SOURCE:
      return {
        ...state,
        select3DataSource: action.param,
      };
    default:
      return state;
  }
};

export default selectPage;
