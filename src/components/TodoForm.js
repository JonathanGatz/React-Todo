import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }


handleSubmit = (e) => {
    e.prevent.Default();
    this.props.addItem(this.state.item);
};

render() {
    return (
        <form onsubmit= {this.handleSubmit}>
            <input 
            type="text"
            name="item"
            value= {this.state.item}
            onChange= {this.handleChanges}/>

            <button> Add </button>
        </form>
    )
}

}

export default TodoForm;