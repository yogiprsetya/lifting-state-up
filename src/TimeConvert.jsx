import React from 'react';

export default class UnitConvert extends React.Component {
  constructor() {
    super();

    this.state = {
      units: 0
    }
  }

  _convertUnit = (e) => {
    this.setState({ units: e.target.value })
    this.props.convertDo(e.target.value);
  }

  render() {
    const { unit, nilai } = this.props;

    return (
      <fieldset>
        <legend>{ unit } :</legend>
        <input value={nilai} onChange={this._convertUnit} />
      </fieldset>
    )
  }
}