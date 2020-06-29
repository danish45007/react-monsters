import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.components'

// parent component APP
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    // setting the context of this used in handlechange to this in App class 
    // this.handleChange = this.handleChange.bind(this);
  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  // after this render process will happen
  render() {
    const { monsters,searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      )
    return (
      <div className="App">
      <h1>Monster Page</h1>
      <SearchBox 
      holder='search monster' 
      handleChange={this.handleChange} />
      <CardList monsters={filterMonsters}>
      </CardList>
    </div>
    )
  }
}
export default App;
