import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditProfilePopup;
