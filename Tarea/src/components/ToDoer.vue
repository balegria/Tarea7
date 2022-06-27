<script>
import { useToDoerStore } from '@/stores/toDoerStore'
export default {
    setup() {
        const toDoerStore = useToDoerStore()
        return {
            toDoerStore,
        }
    },
}
</script>

<template>
    <div class="container w-50">
        <b-card bg-variant="secondary" text-variant="white" header="ToDoer" class="text-start">
            <div class="d-flex flex-row mb-4">
                <b-form-input v-model="toDoerStore.newTodo" class="text-start" placeholder="¿Qué quieres hacer hoy?">
                </b-form-input>
                <b-button @click="toDoerStore.addTodo" pill variant="dark" class="mx-1">+</b-button>
            </div>
            <div class="d-flex flex-column">
                <div v-for="todo in toDoerStore.uncompletedTodos">
                    <div class="d-flex flex-row bg-white border rounded mb-2" style="height: 5vh;"
                        @mouseover="todo.hidden = false" @mouseleave="todo.hidden = true">
                        <p class="mb-0 mx-1 text-dark me-auto ms-2">{{ todo.text }}</p>
                        <b-button :hidden="todo.hidden" size="sm" @click="todo.completed = !todo.completed" pill
                            variant="white">✓</b-button>
                        <b-button @click="toDoerStore.removeTodo(todo)" :hidden="todo.hidden" size="sm" pill
                            variant="white">✗
                        </b-button>
                    </div>
                </div>
            </div>

            <b-card-text class="mt-3">
                <b-button style="height: 5vh; width: 5vh;"
                    @click="toDoerStore.showCompleted = !toDoerStore.showCompleted" size="sm"
                    v-b-toggle.collapseCompletedTodos variant="dark">
                    <div v-if="toDoerStore.showCompleted">V</div>
                    <div v-else>∧</div>
                </b-button> Tareas completadas
            </b-card-text>

            <div class="d-flex flex-column">
                <b-collapse id="collapseCompletedTodos" class="mt-2">
                    <div v-for="todo in toDoerStore.completedTodos">
                        <div class="d-flex flex-row bg-white border rounded mb-2" style="height: 5vh;"
                            @mouseover="todo.hidden = false" @mouseleave="todo.hidden = true">
                            <p class="mb-0 mx-1 text-dark me-auto">{{ todo.text }}</p>
                            <b-button :hidden="todo.hidden" size="sm" @click="todo.completed = !todo.completed" pill
                                variant="white">↑</b-button>
                            <b-button @click="toDoerStore.removeTodo(todo)" :hidden="todo.hidden" size="sm" pill
                                variant="white">✗</b-button>
                        </div>
                    </div>
                </b-collapse>
            </div>
        </b-card>
    </div>
</template>

<style scoped>
.btn-white:hover {
    background-color: black;
    color: white;
}
</style>


