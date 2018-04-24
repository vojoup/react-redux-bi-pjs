'use strict';

import React from 'react';
import {connect} from "react-redux";
import {doTask} from "../actions/task";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        };

        return (
            <label style={style}>
                <input type="checkbox" checked={this.props.task.done} onChange={() => {
                    this.props.checkDone(this.props.task.id, this)
                }}/>{this.props.task.title}
            </label>
        );
    }
}

export default connect(
    (state) => {
        return {tasks: state.tasks};
    },
    (dispatch) => ({
        checkDone: (taskID, component) => {
            component.forceUpdate();
            return dispatch(doTask(taskID))
        }
    })
)(Task);