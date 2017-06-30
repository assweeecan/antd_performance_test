import {
  SET_TAG_OPTIMIZED_PAGE_TAG_DATA_SOURCE,
  SET_TAG_OPTIMIZED_PAGE_TAG_2_DATA_SOURCE,
} from '../constants';

const defaultState = {
  tagDataSource: [],
  tag2DataSource: [],
};

const tagOptimizedPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TAG_OPTIMIZED_PAGE_TAG_DATA_SOURCE:
      return {
        ...state,
        tagDataSource: action.param,
      };
    case SET_TAG_OPTIMIZED_PAGE_TAG_2_DATA_SOURCE:
      return {
        ...state,
        tag2DataSource: action.param,
      };
    default:
      return state;
  }
};

export default tagOptimizedPage;
