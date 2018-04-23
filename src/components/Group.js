'use strict';

import React from 'react'
import Task from "./Task";

class Group extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tasks = this.props.group.tasks.map((task) => {
            return <li><Task task={task}/></li>
        });

        return (
            <React.Fragment>
                <h3>{this.props.group.title}</h3>
                <ul>
                    {tasks}
                </ul>
            </React.Fragment>
        );
    }
}

export default Group;
