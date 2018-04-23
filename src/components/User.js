'use strict';

import React from 'react';
import Group from "./Group";

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const groups = this.props.user.groups.map((group) => {
            return <li><Group group={group}/></li>;
        });

        return (
            <React.Fragment>
                <h2>{this.props.user.email}</h2>
                <ul>
                    {groups}
                </ul>
            </React.Fragment>
        );
    }
}

export default User;
