import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Movies from './components/movies';
import MovieInfos from './components/movieInfos';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoaded: false
        }
    }


    componentDidMount() {
        fetch('https://api.tvmaze.com/search/shows?q=robin%20hood')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    movies: json
                })
            });
    }
    
    render() {
        var { isLoaded, movies } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <Switch>
                  <Route exact path="/" component={Movies} />
                  <Route  path="/movieinfos/:id" component={MovieInfos} />
            </Switch>            
        );
    }
}
export default App;