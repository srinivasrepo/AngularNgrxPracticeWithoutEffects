import { NgrxPracticeModel } from "./ngrxPractice.model";
import * as NgrxPracticeActions from "./ngrxPractice.action"

export const initialState: NgrxPracticeModel = {
  name: "test1",
  url: "http://www.google.com"
}

export function ngrxPracticeReducer(state: NgrxPracticeModel[] = [initialState], action: NgrxPracticeActions.Actions) {
  switch (action.type) {
    case NgrxPracticeActions.ActionTypes.ADD:
      return [...Array.from(state), action.payload];
    case NgrxPracticeActions.ActionTypes.REMOVE:
      var newState = Array.from(state);
      newState.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
}
