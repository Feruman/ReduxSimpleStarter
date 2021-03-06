import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDUQ2XEyfUFzEqYJZFLOsyOjDa5M4gsscc';

// Crete a new component. this component should produce some html
const App = () => {
    return (<div>
        <SearchBar />
    </div>
    );
}

// take this componen's html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
