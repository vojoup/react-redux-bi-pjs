'use strict';

import {ADD_TASK, DO_TASK, DELETE_TASK} from '../actions/task';
import User from "../model/User";
import Group from "../model/Group";
import TaskManager from "../service/TaskManager";

let vondrm12 = new User('vondrm12@fit.cvut.cz');
let pririz = new Group('PřiŘíz', vondrm12);
vondrm12.addGroup(pririz);
let taskManager = new TaskManager();
taskManager.users.push(vondrm12);
taskManager.addTask(pririz, 'Přečíst dokumentaci', new Date('30.04.2018'));
taskManager.addTask(pririz, 'Analýza dat', new Date('25.05.2018'));

const initialState = {
    users: taskManager.users,
    tasks: taskManager.tasks,
    currentUser: vondrm12
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            let group = taskManager.findGroup(action.payload.groupId);
            taskManager.addTask(action.payload.title, group, action.payload.dueDate);
            return Object.assign({}, state, {tasks: taskManager.tasks});
        case DO_TASK:
            taskManager.toggleDone(action.payload);
            return Object.assign({}, state, {tasks: taskManager.tasks});
        case DELETE_TASK:
            taskManager.deleteTask(action.payload);
            return Object.assign({}, state, {tasks: taskManager.tasks});
        default:
            return state;
    }
}
