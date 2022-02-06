import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ name, link, likes, owner, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_active" : ""
  }`;
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleClick() {
    onCardClick({ name, link });
  }

  return (
    <li className="card">
      <img
        className="card__image"
        alt={name}
        src={link}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__text">{name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="card__like-text">{likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button"></button>
    </li>
  );
}

export default Card;
