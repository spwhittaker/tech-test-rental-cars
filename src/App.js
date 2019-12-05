import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Axios from "axios";
import SearchResults from "./components/SearchResults";
import SearchResult from "./components/SearchResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", results: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input) {
    this.setState({ inputText: input.target.value });
    Axios.get(
      `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${6}&solrTerm=${
        this.state.inputText
      }`
    ).then(aWholeLoadOfData => {
      this.setState({ results: aWholeLoadOfData.data.results.docs });
    });
  }

  render() {
    return (
      <div className="App">
        <Form textChange={this.handleChange} />
        <SearchResults resultsArray={this.state.results} />
      </div>
    );
  }
}

export default App;
