import React from 'react';
import SearchResults from './SearchResults';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            <span>{this.props.resultObject.name}, </span>
            <span>{this.props.resultObject.country}</span>
            </div>)
}
}

export default SearchResult;