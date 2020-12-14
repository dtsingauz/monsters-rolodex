import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Baba Yaga",
        },
        {
          name: "Koschey Undead",
        },
        {
          name: "Vodyanoy",
        },
      ],
      searchPattern: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  updateSearchPattern = (newPattern) => {
    this.setState((prevState) => ({
      searchPattern: newPattern,
    }));
  };

  render() {
    const trimmedSearchPattern = this.state.searchPattern.trim();
    const monsters = this.state.monsters.filter(
      (monster) =>
        trimmedSearchPattern === "" ||
        monster.name.toLowerCase().includes(trimmedSearchPattern.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="Search monster"
          searchPattern={this.state.searchPattern}
          onInput={this.updateSearchPattern}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
