import { defineStore } from 'pinia'

export const useToDoerStore = defineStore('toDoerStore', {
    state: () => ({
        newTodo: '',
        todos: [],
        todoID: 1,
        showCompleted: false
    }),
    getters: {
        completedTodos(state) {
            return state.todos.filter((todo) => todo.completed)
        },
        uncompletedTodos(state) {
            return state.todos.filter((todo) => !todo.completed)
        },
    },
    actions: {
        addTodo() {
            this.todos.push(
                {
                    id: this.todoID++,
                    text: this.newTodo,
                    hidden: true,
                    completed: false,
                }
            )
            this.newTodo = ''
        },
        removeTodo(todo) {
            if (confirm("Esta seguro de eliminar la tarea '" + todo.text + "'")) this.todos = this.todos.filter(todoItem => todoItem.id != todo.id)
        }
    },
})