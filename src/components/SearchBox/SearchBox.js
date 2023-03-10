import React, { Component, useState } from 'react';
import './SearchBox.css';

function SearchBox() {
    let [searchLine,setSearchLine] = useState('')

    let searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    let searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }


        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
}
 
export default SearchBox;