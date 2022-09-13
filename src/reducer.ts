import { type } from './actions';
const initialState = { value: 0 };

export function counterReducer(state = 0, action: any) {
  switch (action.type) {
    case type.INCREMENT:
      return state + 1;
      break;
    case type.DECREMENT:
      return state - 1;
      break;
    default:
      return state;
      break;
  }
}
