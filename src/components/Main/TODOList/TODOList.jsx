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
  }

  handleChange = (event) => this.setState({ newToDo: event.target.value })

  render() {
    return <section>

      <article>
        <h4>Añadir una tarea:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="name" name="name" onChange={this.handleChange} /><br />
          <input type="submit" value="ADD" />
        </form>

      </article>

      <article>
        <ul>
          <li>
            Eliminar lista de tareas:
          <button onClick={this.removeAllToDo}>Eliminar tareas</button>
          </li>
          <li>
            Restaurar tareas diarias:
          <button onClick={this.restoreOriginalList}>Restaurar tareas diarias</button>
          </li>
        </ul>
      </article>

      <article>
        <h2>Mis tareas:</h2>
        {this.printCards()}
      </article>

    </section>;
  }
}

export default TODOList;
