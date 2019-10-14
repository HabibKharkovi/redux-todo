
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTION: 'SHOW_ACTION',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

let todo_id = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: todo_id++,
    text
})