import avatar from "../images/kusto.jpg";

function Main() {
  return (
    <main>
      <section class="profile page__profile">
        <div class="profile__container">
          <div class="profile__avatar">
            <img class="profile__image" src={avatar} alt="Аватар" />
            <button class="profile__avatar-button" type="button"></button>
          </div>
          <div class="profile__info">
            <div class="profile__wrapper">
              <h1 class="profile__title"></h1>
              <button class="profile__edit-button" type="button"></button>
            </div>
            <p class="profile__subtitle"></p>
          </div>
        </div>
        <button class="profile__add-button" type="button"></button>
      </section>
      <section class="cards page__cards">
        <ul class="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
