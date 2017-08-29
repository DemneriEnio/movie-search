import React, { Component } from 'react';
import axios from 'axios';

const api_key = '2c49de280aa121c4d88c4969e4a36632';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: "",
      poster: "https://www.designmantic.com/blog/wp-content/uploads/2016/02/movie-poster.jpg",
      title: "",
      background: "https://wallpapercave.com/wp/ZNzSevS.jpg",
      overview: "Search your favourite movie!",
      release_date: "",
      vote_average: "",
      img: "center"
    }
  }

onInputChange(term){
  if(term !== ""){
  axios.get("https://api.themoviedb.org/3/search/movie?api_key=2c49de280aa121c4d88c4969e4a36632&query="+term)
      .then((result) => {


        this.setState({
        term: term,
        poster: "https://image.tmdb.org/t/p/w500" + result.data.results[0].poster_path,
        title: result.data.results[0].title,
        background: 'https://image.tmdb.org/t/p/w500' + result.data.results[0].backdrop_path,
        overview: result.data.results[0].overview,
        release_date: "Release Date: " + result.data.results[0].release_date,
        vote_average: "Rating: " + result.data.results[0].vote_average + "/10",
        img: "left"
      });
  });
}else{
  this.setState({
    term: term,
    poster: "https://www.designmantic.com/blog/wp-content/uploads/2016/02/movie-poster.jpg",
    title: "",
    background: "https://wallpapercave.com/wp/ZNzSevS.jpg",
    overview: "Search your favourite movie!",
    release_date: "",
    vote_average: "",
    img: "center"
  });
}
  this.props.onSearchTermChange(term);
}

  render(){

    return(
      <div >

        <div className='input'>
          <input type='text' placeholder='Search movie...'  onChange={event => this.onInputChange(event.target.value)} />
        </div>

        <div style={{backgroundImage: 'url(' + this.state.background + ')'}} className='back'>
        <div className="back1">
          <div className='col-md-6 left'>
            <h1 className='title'>{this.state.title}</h1>
            <img src={this.state.poster} className='poster'/>
          </div>

          <div className='col-md-6 right'>
            <h3 className='plot'>{this.state.overview}</h3>
            <h4 className='date'>{this.state.release_date}</h4>
            <h4 className='rate'>{this.state.vote_average}</h4>
          </div>
          </div>
          </div>
    </div>
    );
  }
}

export default SearchBar;
