import React from 'react';
import UnitConvert from './TimeConvert'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gram: 0,
      kilo: 0
    }
  }

  handelGram = (gram) => {
    let kilo = gram / 1000;

    this.setState({ gram, kilo })
  }

  handelKilo = (kilo) => {
    let gram = kilo * 1000;

    this.setState({ gram, kilo })
  }

  render() {
    const { gram, kilo } = this.state;

    return (
      <div>
        <UnitConvert unit="Gram" nilai={gram} convertDo={this.handelGram}/>
        <UnitConvert unit="Kilo" nilai={kilo} convertDo={this.handelKilo}/>
      </div>
    );
  }
}
