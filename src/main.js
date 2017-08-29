import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';




class App extends Component {
  constructor(props){
    super(props);


  }

  render(){
    const movieSearch = _.debounce((term) => {
      this.movieSearch(term)
    }, 2000);

    return(
      <div>
        <SearchBar onSearchTermChange={movieSearch}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
