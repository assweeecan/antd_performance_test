import {
  SET_CHECKBOX_OPTIMIZED_PAGE_CHECKBOX_DATA_SOURCE,
  SET_CHECKBOX_OPTIMIZED_PAGE_CHECKBOX_2_DATA_SOURCE,
} from '../constants';

const defaultState = {
  checkboxDataSource: [],
  checkbox2DataSource: [],
};

const checkboxOptimizedPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CHECKBOX_OPTIMIZED_PAGE_CHECKBOX_DATA_SOURCE:
      return {
        ...state,
        checkboxDataSource: action.param,
      };
    case SET_CHECKBOX_OPTIMIZED_PAGE_CHECKBOX_2_DATA_SOURCE:
      return {
        ...state,
        checkbox2DataSource: action.param,
      };
    default:
      return state;
  }
};

export default checkboxOptimizedPage;
