import {
  SET_TAG_PAGE_SELECT_DATA_SOURCE,
  SET_TAG_PAGE_SELECT_2_DATA_SOURCE,
} from '../constants';

const defaultState = {
  tagDataSource: [],
  tag2DataSource: [],
};

const tagPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TAG_PAGE_SELECT_DATA_SOURCE:
      return {
        ...state,
        tagDataSource: action.param,
      };
    case SET_TAG_PAGE_SELECT_2_DATA_SOURCE:
      return {
        ...state,
        tag2DataSource: action.param,
      };
    default:
      return state;
  }
};

export default tagPage;
