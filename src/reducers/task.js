'use strict';

import {ADD_TASK, DO_TASK, DELETE_TASK} from '../actions/task';

export default function taskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
        case DO_TASK:
        case DELETE_TASK:
        default:
            return state;
    }
}
