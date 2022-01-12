import React, { Component } from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import Searchbox from './components/Searchbox';
import './style.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>
            response.json()).then(users => this.setState({ robots: users }));
    }

    onSearch = (event) => {
        this.setState({ searchField: event.target.value });
    };


    render() {

        const filteredRobos = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading...</h1>;
        }

        return (
            <div className="tc" >
                <h1 className="">Robo Friends</h1>
                <Searchbox searchbox={this.onSearch} />
                <Scroll>
                    <CardList robots={filteredRobos} />
                </Scroll>
            </div>
        )
    };
}

export default App;
