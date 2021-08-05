import { Dispatch } from 'redux';
import HomeApi from 'api/home';
import homeConstant from '../constant';

const { UPDATE_VALUE, INIT_LIST } = homeConstant;

export const updateInputValueAction = (value: string) => ({
  type: UPDATE_VALUE,
  value
});

export const getListAction = (data: string[]) => ({
  type: INIT_LIST,
  data
});

export const initListAction = () => async (dispatch: Dispatch) => {
  const res = await HomeApi.getList();
  const action = getListAction(res.data);
  dispatch(action);
};
