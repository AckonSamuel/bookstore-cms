const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

export const Status = (status) => ({
  type: CHECK_STATUS,
  status,
});

