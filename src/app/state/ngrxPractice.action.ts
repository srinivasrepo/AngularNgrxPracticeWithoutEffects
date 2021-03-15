import { NgrxPracticeModel } from "./ngrxPractice.model";

export enum ActionTypes{
  ADD = "[NGRXPRACTICE] add",
  REMOVE = "[NGRXPRACTICE] remove"
}

export class AddNgrxPracticeAction {
  readonly type = ActionTypes.ADD;
  constructor(public payload: NgrxPracticeModel) {}
}

export class RemoveNgrxPracticeAction {
  readonly type = ActionTypes.REMOVE;
  constructor(public index: number) {}
}

export type Actions = AddNgrxPracticeAction | RemoveNgrxPracticeAction
