import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

function Right() {
    return (
        <div className='right'>
                <div className='search'>
                    <div className='search_container'>
                        <SearchIcon />
                        <input placeholder='Search Twitter'></input>
                    </div>
                </div>
        
            <div className='right_side'>
                <div className='trends'><span className='trendName'>Trends for You </span>
                    <span><SettingsIcon /></span>
                </div>
                    <div className="trending">
                        <p>trending in india</p>
                        <h2>#something_trending</h2>
                        <p>12k tweets</p>
                    </div>
                    <div className="trending">
                        <p>trending in india</p>
                        <h2>#something_trending</h2>
                        <p>12k tweets</p>
                    </div>
                    <div className="trending">
                        <p>trending in india</p>
                        <h2>#something_trending</h2>
                        <p>12k tweets</p>
                    </div>
                    <div className="trending">
                        <p>trending in india</p>
                        <h2>#something_trending</h2>
                        <p>12k tweets</p>
                    </div>
                    <div className="trending">
                        <p>trending in india</p>
                        <h2>#something_trending</h2>
                        <p>12k tweets</p>
                    </div>
                </div>
        </div>
    )
}

export default Right
