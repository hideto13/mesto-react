function Card({ name, link, likes }) {
  return (
    <li className="card">
      <img className="card__image" alt={name} src={link} />
      <div className="card__description">
        <h2 className="card__text">{name}</h2>
        <div className="card__like-container">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-text">{likes.length}</p>
        </div>
      </div>
      <button className="card__delete-button" type="button"></button>
    </li>
  );
}

export default Card;
