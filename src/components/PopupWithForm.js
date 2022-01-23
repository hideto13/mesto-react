import React from "react";

function PopupWithForm({ title, name, buttonTitle, isOpen, children }) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button"></button>
        <h2 className={`popup__title popup__title_popup_${name}`}>{title}</h2>
        <form className="popup__form" name={`${name}-form`} noValidate>
          {children}
          <button className="popup__submit-button" type="submit">
            {buttonTitle}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
