import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {done: this.props.task.done};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({done: event.target.checked});
    }

    render() {
        const style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return (
            <label style={style}>
                <input type="checkbox" checked={this.state.done} onChange={this.handleChange}/>{this.props.task.title}
            </label>
        );
    }
}

export default Task;
``
