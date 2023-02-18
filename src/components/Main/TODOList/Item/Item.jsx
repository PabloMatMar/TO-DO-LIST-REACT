import React, { Component } from "react";
import './Item.css'

class Item extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      event:this.props.data 
    }
  }

  render() {
    return (<article>
      <h1>To do:</h1>
      <p>{this.props.data.toDo}</p>
      <button onClick={this.props.remove}>Delete this to do</button>
      </article>
    )
  }
}

export default Item;
