import * as nameConst from './const';

export const getListUser = params => ({
  type: nameConst.GET_LIST_USER,
  params
});
export const getListUserSuccess = data => ({
  type: nameConst.GET_LIST_USER_SUCCESS,
  payload: data
});
