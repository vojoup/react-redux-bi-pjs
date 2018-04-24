'use strict';

import React from 'react'
import User from './User';
import {connect} from "react-redux";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h1>BI-PJS.1 Úkolníček</h1>
                <User user={this.props.user}/>
            </React.Fragment>
        );
    }
}

export default connect(
    (state) => ({
        user: state.currentUser
    })
)(App);
