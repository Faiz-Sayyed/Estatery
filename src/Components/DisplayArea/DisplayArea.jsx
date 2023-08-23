import React from 'react'
import DisplayCard from '../DisplayCard/DisplayCard'
import './DisplayArea.css'

const DisplayArea = ({ finalResults }) => {
    return (
        <div className="display-container">
            {
                finalResults.map((item) => (
                    (item.popular === true) &&
                    <div key={item.name}>
                        <DisplayCard item={item} />
                    </div>
                ))
            }
            {
                finalResults.map((item) => (
                    (item.popular === false) &&
                    <div key={item.name}>
                        <DisplayCard item={item} />
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayArea