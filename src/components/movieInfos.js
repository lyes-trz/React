import React, { Component } from 'react';


class MovieInfos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            isLoaded: false
        }
    }


    componentDidMount() {
        fetch('https://api.tvmaze.com/shows/' + this.props.match.params.id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    movie: json
                })
            });
    }
    
    render() {
        var { isLoaded, movie } = this.state;
        
        if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <img src={movie.image?movie.image.medium:null} />
                <h1>Name : {movie.name}</h1>
                <h6>Type : {movie.type}</h6>
                <h6>language :{movie.language}</h6>
                <h6>status : {movie.status}</h6>
                Summary: {movie.summary}
            </div>
        );
    }
}
export default MovieInfos;