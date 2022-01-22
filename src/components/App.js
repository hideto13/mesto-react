import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div class="page__container">
        <Header />
        <Main />
        <Footer />
        <section class="popup popup_profile">
          <div class="popup__container">
            <button class="popup__close" type="button"></button>
            <h2 class="popup__title">Редактировать профиль</h2>
            <form class="popup__form" name="profile-form" novalidate>
              <input
                class="popup__input popup__input_field_name"
                name="name"
                type="text"
                id="name"
                placeholder="Ваше имя"
                required
                minlength="2"
                maxlength="40"
                autocomplete="off"
              />
              <span
                id="name-error"
                class="popup__error popup__error_field_name"
              ></span>
              <input
                class="popup__input popup__input_field_text"
                name="text"
                type="text"
                id="text"
                placeholder="Ваш род деятельности"
                required
                minlength="2"
                maxlength="200"
                autocomplete="off"
              />
              <span
                id="text-error"
                class="popup__error popup__error_field_text"
              ></span>
              <button class="popup__submit-button" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>
        <section class="popup popup_card">
          <div class="popup__container">
            <button class="popup__close" type="button"></button>
            <h2 class="popup__title">Новое место</h2>
            <form class="popup__form" name="card-form" novalidate>
              <input
                class="popup__input popup__input_field_title"
                name="title"
                placeholder="Название"
                required
                type="text"
                id="title"
                minlength="2"
                maxlength="30"
                autocomplete="off"
              />
              <span
                id="title-error"
                class="popup__error popup__error_field_title"
              ></span>
              <input
                class="popup__input popup__input_field_link"
                name="link"
                placeholder="Ссылка на картинку"
                required
                type="url"
                id="link"
                autocomplete="off"
              />
              <span
                id="link-error"
                class="popup__error popup__error_field_link"
              ></span>
              <button class="popup__submit-button" type="submit">
                Создать
              </button>
            </form>
          </div>
        </section>
        <section class="popup popup_photo">
          <figure class="popup__wrapper">
            <button class="popup__close" type="button"></button>
            <img class="popup__image" alt="" />
            <figcaption class="popup__description"></figcaption>
          </figure>
        </section>
        <section class="popup popup_delete">
          <div class="popup__container popup__container_popup_delete">
            <button class="popup__close" type="button"></button>
            <h2 class="popup__title popup__title_popup_delete">Вы уверены?</h2>
            <button class="popup__submit-button" type="button">
              Да
            </button>
          </div>
        </section>
        <section class="popup popup_avatar">
          <div class="popup__container">
            <button class="popup__close" type="button"></button>
            <h2 class="popup__title">Обновить аватар</h2>
            <form class="popup__form" name="avatar-form" novalidate>
              <input
                class="popup__input popup__input_field_avatar"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
                type="url"
                id="avatar"
                autocomplete="off"
              />
              <span
                id="avatar-error"
                class="popup__error popup__error_field_avatar"
              ></span>
              <button class="popup__submit-button" type="submit">
                Соxранить
              </button>
            </form>
          </div>
        </section>
      </div>
      <template class="card_template">
        <li class="card">
          <img class="card__image" alt="" />
          <div class="card__description">
            <h2 class="card__text"></h2>
            <div class="card__like-container">
              <button class="card__like-button" type="button"></button>
              <p class="card__like-text">1</p>
            </div>
          </div>
          <button class="card__delete-button" type="button"></button>
        </li>
      </template>
    </>
  );
}

export default App;
