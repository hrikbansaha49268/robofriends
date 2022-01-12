import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import './style.css';
import ErrorBoundary from '../components/ErrorBoundary';


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
        const { robots, searchField } = this.state;
        const filteredRobos = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !robots.length ?
            <h1 className="tc">Loading...</h1> :
            (
                <div className="tc" >
                    <h1 className="">Robo Friends</h1>
                    <Searchbox searchbox={this.onSearch} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobos} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    };
}

export default App;
