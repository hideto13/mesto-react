import avatar from "../images/kusto.jpg";

function Main({
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleEditProfileClick,
}) {
  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <img className="profile__image" src={avatar} alt="Аватар" />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__title"></h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__subtitle"></p>
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
