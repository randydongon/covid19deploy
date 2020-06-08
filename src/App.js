import React, { Component } from 'react';
import './App.module.css';
import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';
import Chart from './components/Chart/Chart';
import { fetchDailyData } from './api';
import covidLogo from './images/covid19.jpg';

class App extends Component {
  state = {
    data: '',
    country: ''
  }

  async componentDidMount() {
    const fetchData = await fetchDailyData();

    this.setState({ data: fetchData });
  }

  handlePicker = async (country) => {
    const fetchData = await fetchDailyData(country);

    this.setState({ data: fetchData, country: country })
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <div className="mx-auto justify-content-center text-center my-3 ">
          <img src={covidLogo} style={{ minWidth: '5rem', maxWidth: '15rem', height: '5rem' }} className="card-img" alt="" />
        </div>
        <Cards data={data} />
        <Country selectedItem={this.handlePicker} />
        <Chart data={data} country={country} />

      </div>);
  }
}

export default App;