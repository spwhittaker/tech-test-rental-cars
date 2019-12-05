import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.resultsArray.map(searchResultItem => (<SearchResult resultObject={searchResultItem} />))}
            </div>
            )
    }
}

export default SearchResults;