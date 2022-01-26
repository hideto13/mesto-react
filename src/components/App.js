import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

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
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        handleAddPlaceClick={handleAddPlaceClick}
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_field_name"
          name="name"
          type="text"
          id="name"
          placeholder="Ваше имя"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
        />
        <span
          id="name-error"
          className="popup__error popup__error_field_name"
        ></span>
        <input
          className="popup__input popup__input_field_text"
          name="text"
          type="text"
          id="text"
          placeholder="Ваш род деятельности"
          required
          minLength="2"
          maxLength="200"
          autoComplete="off"
        />
        <span
          id="text-error"
          className="popup__error popup__error_field_text"
        ></span>
      </PopupWithForm>
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
  );
}

export default App;
