import React from "react";
import '../harry-styles/Form.css';


class Form extends React.Component {
  constructor(props) {
    super(props);
    
  };

  render() {
    return (
      <div>
        <h1>Find somewhere to hire</h1>
        <p>Search for a location below</p>
        <input
          type="text"
          placeholder="Type some stuff here"
          onChange={e => this.props.textChange(e)}
        />
      </div>
    );
  }
};

export default Form;
