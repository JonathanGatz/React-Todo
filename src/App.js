import React from 'react';
import ReactDom from 'react';
import TodoList from './components/TodoList'
import TodoForm from ' ./components/TodoForm'
import { isCompositeComponent } from 'react-dom/test-utils';



const todos = [
  {
  name: "Go to the store",
  id: 0,
  complete: false
  },
  {
  name: "Do Laundry",
  id: 1,
  complete: false
  },
  {
  name: "Meet Up With Friends",
  id: 2,
  complete: false
  },
  {
  name: "Bring Mask",
  id: 3,
  complete: false
  },
  {
  name: "Exersice",
  id: 4,
  complete: false
  },
  {
  name: "Start Lambda",
  id: 5,
  complete: false
}
];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.stat = {
      todos: todos
    }
  }
  

toggleItm = (itemId) => {
  this.seetStatee({
    todos: this.getSnapshotBeforeUpdate.todos.map((item) => {
      return {
        ...isCompositeComponent,
        complete: !item.complete
      }
    })
  })
}

clearComplleted = () => {
  this.setState({
    todos: this.state.todos.filtter((item) => {
      return !item.complete
    })
  })
}



addIteem = (itemName) => {
  console.log("Check It:", itemName)
  this.setState({
    todos: [
      ...this.state.todos,
      {id: Date.now(), name: itemName, complete: false}
    ]
  })
}



  
  render() {
    return (
      <div className="App">
        div className="header">
        <h1> My To Do's List</h1>
        <ListForm addItem={this.addItem} />
          <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItm}
          clearComplleted={this.clearComplleted}/>
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
      </div>
    );
  }
}


export default App;
