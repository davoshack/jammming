import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    render() {
        const { searchResults } = this.props;
        const { onAdd } = this.props;
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={searchResults} onAdd={onAdd}/>
            </div>
        );
    }
}

export default SearchResults;