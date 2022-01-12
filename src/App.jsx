import React, { Component } from 'react';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import { robots } from './data/robots';
import './style.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    };

    onSearch = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {

        const filteredRobos = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        return (
            <div className="tc" >
                <h1 className="">Robo Friends</h1>
                <Searchbox searchbox={this.onSearch} />
                <CardList robots={filteredRobos} />
            </div>
        )
    };
}

export default App;
