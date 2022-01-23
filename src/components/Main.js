import React from "react";
import { api } from "../utils/api";

function Main({
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleEditProfileClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <img className="profile__image" src={userAvatar} alt="Аватар" />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards page__cards">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
