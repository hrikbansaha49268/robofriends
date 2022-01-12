import React from 'react';

const Searchbox = ({ searchbox }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba br3 b--green bg-lightest-blue"
                type="search"
                placeholder="Search Robots..."
                onChange={searchbox}
            />
        </div>
    )
}

export default Searchbox;
