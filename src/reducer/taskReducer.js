export const ADD_TASK = "ADD_TASK";

function taskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, action.payload]
            }    
        default:
            return state;
    }
}

export default taskReducer;