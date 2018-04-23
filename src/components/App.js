import React from 'react'
import User from "./User";

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

export default App;
