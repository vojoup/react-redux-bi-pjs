'use strict';

export const ADD_TASK = 'add_task';
export const DO_TASK = 'do_task';
export const DELETE_TASK = 'delete_task';

export function addTask(title, groupId, dueDate, description) {
    return {
        type: ADD_TASK,
        payload: {title, groupId, dueDate, description}
    };
}

export function doTask(id) {
    return {
        type: DO_TASK,
        payload: id
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    };
}
