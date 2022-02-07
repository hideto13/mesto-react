import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [currentUser, setCurrentUser] = React.useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleUpdateUser(user) {
    api.setUserInfo(user.name, user.about).then((user) => {
      setCurrentUser(user);
      closeAllPopups();
    });
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          title="Новое место"
          name="card"
          buttonTitle="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_field_title"
            name="title"
            placeholder="Название"
            required
            type="text"
            id="title"
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
          <span
            id="title-error"
            className="popup__error popup__error_field_title"
          ></span>
          <input
            className="popup__input popup__input_field_link"
            name="link"
            placeholder="Ссылка на картинку"
            required
            type="url"
            id="link"
            autoComplete="off"
          />
          <span
            id="link-error"
            className="popup__error popup__error_field_link"
          ></span>
        </PopupWithForm>
        <ImagePopup
          name={selectedCard.name}
          link={selectedCard.link}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          buttonTitle="Да"
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          buttonTitle="Соxранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_field_avatar"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
            type="url"
            id="avatar"
            autoComplete="off"
          />
          <span
            id="avatar-error"
            className="popup__error popup__error_field_avatar"
          ></span>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
