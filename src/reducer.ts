import { type } from './actions';
const initialState = { value: 0 };

export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
      break;
    case type.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
      break;
    default:
      return state;
      break;
  }
}
