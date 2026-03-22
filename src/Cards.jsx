import React, { Component } from "react";
import "../cards.css";

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0,
        };
    }

    increment = () => {
        this.setState(
            (prevState) => ({ quantity: prevState.quantity + 1 }),
            () => {
                this.props.onAddToCart({
                    name: this.props.name,
                    price: this.props.price,
                    quantity: this.state.quantity
                });
            }
        );
    };

    decrement = () => {
        if (this.state.quantity > 0) {
            this.setState(
                (prevState) => ({ quantity: prevState.quantity - 1 }),
                () => {
                    // ✅ Appelé APRÈS que l'état est mis à jour
                    this.props.onAddToCart({
                        name: this.props.name,
                        price: this.props.price,
                        quantity: this.state.quantity
                    });
                }
            );
        }
    };

    render() {
        const { name, price, image, category } = this.props;
        const { quantity } = this.state;

        return (
            <div className="card">
                {quantity === 0 ? (
                    <button className="btn-add" onClick={this.increment}>
                        Add to Cart
                    </button>
                ) : (
                    <div className="quantity-box">
                        <button onClick={this.decrement}>➖</button>
                        <span>{quantity}</span>
                        <button onClick={this.increment}>➕</button>
                    </div>
                )}

                <figure>
                    <img src={image.desktop} alt={name} />
                    <figcaption>{category}</figcaption>
                </figure>

                <h3>{name}</h3>
                <p>${price}</p>
            </div>
        );
    }
}

export default Cards;