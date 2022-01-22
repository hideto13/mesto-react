import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <>
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          buttonTitle="Сохранить"
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
        <PopupWithForm title="Новое место" name="card" buttonTitle="Создать">
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
        <ImagePopup />
        <PopupWithForm title="Вы уверены?" name="delete" buttonTitle="Да" />
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          buttonTitle="Соxранить"
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
      <template className="card_template">
        <li className="card">
          <img className="card__image" alt="" />
          <div className="card__description">
            <h2 className="card__text"></h2>
            <div className="card__like-container">
              <button className="card__like-button" type="button"></button>
              <p className="card__like-text">1</p>
            </div>
          </div>
          <button className="card__delete-button" type="button"></button>
        </li>
      </template>
    </>
  );
}

export default App;
