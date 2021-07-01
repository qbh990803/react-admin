import { fromJS } from "immutable";
import { homeConstant } from "../constant";

interface Action {
  type: string;
  [index: string]: string | string[];
}

const { UPDATE_VALUE, INIT_LIST } = homeConstant;
const defaultState = fromJS({
  value: "111",
  list: [],
});

const home = (state = defaultState, action: Action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return state.set("value", action.value);
    case INIT_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
};
export default home;
