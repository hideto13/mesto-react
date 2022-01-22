import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <section className="popup popup_profile">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="profile-form" noValidate>
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
              <button className="popup__submit-button" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>
        <section className="popup popup_card">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="card-form" noValidate>
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
              <button className="popup__submit-button" type="submit">
                Создать
              </button>
            </form>
          </div>
        </section>
        <section className="popup popup_photo">
          <figure className="popup__wrapper">
            <button className="popup__close" type="button"></button>
            <img className="popup__image" alt="" />
            <figcaption className="popup__description"></figcaption>
          </figure>
        </section>
        <section className="popup popup_delete">
          <div className="popup__container popup__container_popup_delete">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title popup__title_popup_delete">Вы уверены?</h2>
            <button className="popup__submit-button" type="button">
              Да
            </button>
          </div>
        </section>
        <section className="popup popup_avatar">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="avatar-form" noValidate>
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
              <button className="popup__submit-button" type="submit">
                Соxранить
              </button>
            </form>
          </div>
        </section>
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
