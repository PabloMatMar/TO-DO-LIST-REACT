import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: this.props,
      weatherTemp: "",
      weatherDescription: "",
      city: ""
    }
  }

  async componentDidMount(city) {
    // const city = 'Madrid'
    const apiKey = 'adc1556c038bfbd6e3c571ef7257d78c';
    //Petición HTTP
    await new Promise((resolve, reject) => setTimeout(resolve, 3000, "esperando..."))
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    this.setState({
      weatherTemp: data.main.temp,
      weatherDescription: data.weather[0].description

    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ weather: this.props });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const city = event.target.name.value;

    alert("To do Send!");
    this.cleanForm()
    console.log(city)
    this.componentDidMount(city)
    this.setState({ city: city })
  }

  cleanForm = () => {
    const reset = document.getElementById("formClean")
    const response = reset.reset()
    return response
  }

  handleChange = (event) => this.setState({ newToDo: event.target.value })

  render() {
    console.log('RENDER')
    return (
      <div>
        <article>
          <h4>Check Weather</h4>
          <form id="formClean" onSubmit={this.handleSubmit}>
            <input type="text" id="name" name="name" onChange={this.handleChange} /><br />
            <button type="submit"> Check </button>
          </form>
          <p>The current temperature in {this.state.city} is: {this.state.weatherTemp}</p>
          <p>The weather in {this.state.city} is: {this.state.weatherDescription}</p>
        </article>
      </div>
    );
  }
}

export default Weather;
