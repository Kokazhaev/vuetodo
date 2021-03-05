export const state = {
  todos: {}
}

export type State = typeof state

export enum MutationTypes {
  SET_TODO = "SET_TODO"
}

export type Todo = {
  title: string,
  done: Boolean,
  id: number,
  date: string
}

export type SetTodoPayload = {
  [key: number]: Todo[]
}