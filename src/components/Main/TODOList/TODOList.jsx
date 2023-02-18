import React, { Component } from "react";
import Item from './Item';
import data from './toDoes.json';
import { v4 as uuidv4 } from 'uuid';

class TODOList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toDoList: data,
      newToDo: ""
    }
  }

  deleteToDo = (i) => {
    const remainingToDo = this.state.toDoList.filter((event, j) => i !== j);
    this.setState({ toDoList: remainingToDo })
  }


  printCards = () => <section>{this.state.toDoList.map((event, i) => <Item data={event} remove={() => this.deleteToDo(i)} key={uuidv4()} />)}</section>

  removeAllToDo = () => {
    this.setState({ toDoList: [] })
  }

  restoreOriginalList = () => {
    this.setState({ toDoList: data })
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const toDo = event.target.name.value;

    const newToDo = {
      toDo
    };

    alert("To do Enviado!!!!!!");
    this.setState({ toDoList: [...this.state.toDoList, newToDo] });
    this.cleanForm()
  }

  handleChange = (event) => this.setState({ newToDo: event.target.value })

  cleanForm = () => {
    const reset = document.getElementById("formClean")
    const response = reset.reset()
    return response
  }

  render() {
    return <section>

      <article>
        <h4>Add a task:</h4>
        <form id="formClean" onSubmit={this.handleSubmit}>
          <input type="text" id="name" name="name" onChange={this.handleChange} /><br />
          <button type="submit"> ADD </button>
        </form>

      </article>

      <article>
        <ul>
          <li>
            Click here for delete task list:<br />
            <button onClick={this.removeAllToDo}>deleteAll</button>
          </li>
          <li>
            click here for restore daily tasks:<br />
            <button onClick={this.restoreOriginalList}>restore</button>
          </li>
        </ul>
      </article>

      <article>
        <h2>My tasks:</h2>
        {this.printCards()}
      </article>

    </section>;
  }
}

export default TODOList;
