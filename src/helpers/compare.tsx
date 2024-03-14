import { IState } from "../type/type";

export default (state:IState):boolean => {
  return Boolean(state.checked && state.name && state.phone);
};