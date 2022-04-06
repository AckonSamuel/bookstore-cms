const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export const Status = (status) => ({
  type: CHECK_STATUS,
  status,
});

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default CategoriesReducer;
