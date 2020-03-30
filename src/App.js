import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  handleSearchChange = val => {
    this.setState({ searchField: val });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <div className="text-center">
          <SearchBox
            placeholder="Search Monsters"
            handleChange={e => this.handleSearchChange(e.target.value)}
          />
        </div>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
