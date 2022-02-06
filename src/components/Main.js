import React from "react";
import Card from "./Card";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleEditProfileClick,
  onCardClick,
}) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      {currentUser ? (
        <>
          <section className="profile page__profile">
            <div className="profile__container">
              <div className="profile__avatar">
                <img
                  className="profile__image"
                  src={currentUser.avatar}
                  alt="Аватар"
                />
                <button
                  className="profile__avatar-button"
                  type="button"
                  onClick={handleEditAvatarClick}
                ></button>
              </div>
              <div className="profile__info">
                <div className="profile__wrapper">
                  <h1 className="profile__title">{currentUser.name}</h1>
                  <button
                    className="profile__edit-button"
                    type="button"
                    onClick={handleEditProfileClick}
                  ></button>
                </div>
                <p className="profile__subtitle">{currentUser.about}</p>
              </div>
            </div>
            <button
              className="profile__add-button"
              type="button"
              onClick={handleAddPlaceClick}
            ></button>
          </section>
          <section className="cards page__cards">
            <ul className="cards__list">
              {cards.map(({ _id, ...props }) => (
                <Card
                  key={_id}
                  onCardClick={onCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  _id={_id}
                  {...props}
                />
              ))}
            </ul>
          </section>
        </>
      ) : (
        <></>
      )}
    </main>
  );
}

export default Main;
