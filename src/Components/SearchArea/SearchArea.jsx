import React, { useState, useEffect } from 'react'
import { BiChevronDownCircle } from 'react-icons/bi'
import './SearchArea.css'

const SearchArea = ({ data, setSearchResults, setFilterResults }) => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(new Date(0));
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const filter = () => {

        const newFilterResults = [];
        data.forEach((item) => {
            let cnt = 0;

            if (location.length === 0 || item.location.toLowerCase().includes(location.toLowerCase())) {
                cnt++;
            }

            if (isNaN(date) || date === new Date(0) || date <= new Date(item.date)) {
                cnt++;
            }

            let low = price.split('-')[0];
            let high = price.split('-')[1];
            if (price.length === 0 || (low <= item.price && high >= item.price)) {
                cnt++;
            }

            if (type.length === 0 || type.toLowerCase() === item.type.toLowerCase()) {
                cnt++;
            }

            if (cnt === 4) {
                newFilterResults.push(item);
            }
        })

        setFilterResults(newFilterResults);
    }

    useEffect(() => {

        const newSearchResults = [];
        data.forEach((item) => {
            if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                newSearchResults.push(item);
            }
        })

        if (searchQuery.length) {
            setSearchResults(newSearchResults);
        }
        else {
            setSearchResults(data);
        }

    }, [data, searchQuery, setSearchResults])

    return (
        <div className="search-area">

            <div className="search-title">
                <div className="search-title-text">
                    Search properties to rent
                </div>
                <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search with Search Bar"
                        className="search-input"
                        onChange={(e) => (setSearchQuery(e.target.value))}
                    />
                    <div>
                        <BiChevronDownCircle style={{ fontSize: "1.2rem", color: "rgb(100, 100, 255)" }} />
                    </div>
                </div>
            </div>

            <div className="filter-area">
                <div className="filter-location">
                    <label>Location</label>
                    <input
                        type="text"
                        placeholder="Search Location"
                        onChange={(e) => (setLocation(e.target.value))}
                    />
                </div>

                <div className="filter-date">
                    <label>When</label>
                    <input
                        type="text"
                        placeholder="Select Move-in Date"
                        onChange={(e) => (setDate(new Date(e.target.value)))}
                    />
                </div>

                <div className="filter-price">
                    <label>Price</label>
                    <select onChange={(e) => (setPrice(e.target.value))}>
                        <option value="">Select Price</option>
                        <option value="0-1000">$0 - $1000</option>
                        <option value="1000-2500">$1000 - $2500</option>
                        <option value="2500-5000">$2500 - $5000</option>
                        <option value="5000-10000">$5000 - $10000</option>
                    </select>
                </div>

                <div className="filter-type">
                    <label>Property Type</label>
                    <select onChange={(e) => (setType(e.target.value))}>
                        <option value="">Select Type</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="mansion">Mansion</option>
                    </select>
                </div>

                <div className="submit-button-container">
                    <button
                        onClick={filter}
                        className="filter-submit">
                        Search
                    </button>
                </div>
            </div>

        </div >
    )
}

export default SearchArea