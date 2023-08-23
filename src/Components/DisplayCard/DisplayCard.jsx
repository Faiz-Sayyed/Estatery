import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiBed } from 'react-icons/bi'
import { LiaBathSolid } from 'react-icons/lia'
import { BsXDiamond } from 'react-icons/bs'
import './DisplayCard.css'

const DisplayCard = ({ item }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={item.image} alt="" />
            </div>

            {
                item.popular && <div className="popular">Popular</div>
            }

            <div className="card-price-area">
                <div className="card-price">
                    ${item.price}
                    <span>
                        /month
                    </span>
                </div>
                <div className="liked-icon">
                    <AiOutlineHeart style={{ fontSize: "1.5rem", color: "rgb(100, 100, 255)" }} />
                </div>
            </div>

            <div className="card-name">
                {item.name}
            </div>

            <div className="card-location">
                {item.location}
            </div>

            <hr className="line" />

            <div className="card-details">
                <div>
                    <BiBed style={{ marginRight: "0.3rem", color: "rgb(100, 100, 255)" }} /> {item.details.beds}
                    <span>Beds</span>
                </div>
                <div>
                    <LiaBathSolid style={{ marginRight: "0.3rem", color: "rgb(100, 100, 255)" }} /> {item.details.bathrooms}
                    <span>Bathroom</span>
                </div>
                <div>
                    <BsXDiamond style={{ marginRight: "0.3rem", color: "rgb(100, 100, 255)" }} />{item.details.l} x {item.details.b}
                    <span>㎡</span>
                </div>
            </div>
        </div>
    )
}

export default DisplayCard