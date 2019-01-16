import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {

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
            <div className="App">
                
                <ul>
                    {movies.map(movie =>(
                      
                     <Link to={`/movieinfos/${movie.show.id}`} key="{movie.show.id}">
                       <li>
                          <div>
                             <img src={movie.show.image?movie.show.image.medium:null} />
                             <h4>Name : {movie.show.name}</h4>                 
                          </div>  
                        </li>
                     </Link>

                    )
                    )}
                </ul>
            </div>
        );
    }
}
export default Movies;