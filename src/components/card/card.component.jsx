import React from "react";
import "./card.styles.css";
class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${this.props.monster.id}?set=set4`}
          alt="monster"
        />
        <h1>{this.props.monster.name}</h1>
      </div>
    );
  }
}

export default Card;
