import React, { Component } from "react";
import "../cards.css";
class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, price, image,category } = this.props;
        return (
            <div className="card">
                <a href="#" className="btn-add">Add to Cart</a>
                <figure>
                    <img src={image.desktop} alt=""/>

                    <figcaption>{category}</figcaption>
                </figure>

                <h3>{name}</h3>
                <p>${price}</p>

            </div>

        );
    }
}

export default Cards;