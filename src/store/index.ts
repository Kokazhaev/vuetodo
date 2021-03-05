import { createStore } from 'vuex'
import { State, MutationTypes, SetTodoPayload } from './types'

export default createStore<any>({
  state: {
    todos: {}
  },
  mutations: {
    [MutationTypes.SET_TODO](state: State, payload: SetTodoPayload): void {
      state.todos = payload
    }
  },
  actions: {
    setTodo({ commit }, payload: [string, string]) {
      if(this.state.todos[payload[0]]) {
        const todos: SetTodoPayload = { 
          ...this.state.todos, 
          [payload[0]]: [...this.state.todos[payload[0]], { title: payload[1], done: false, id: new Date().getMilliseconds(), date: payload[0] }] 
        }
        commit(MutationTypes.SET_TODO, todos)
      } else {
        const todos: SetTodoPayload = { ...this.state.todos, [payload[0]]: [{ title: payload[1], done: false, id: new Date().getMilliseconds(), date: payload[0] }] }
        commit(MutationTypes.SET_TODO, todos)
      }
    },
    sortList({ commit }, payload: SetTodoPayload) {
      commit(MutationTypes.SET_TODO, payload)
    }
  },
  getters: {
    getTodos(state: State): SetTodoPayload {
      return state.todos
    }
  }
})
