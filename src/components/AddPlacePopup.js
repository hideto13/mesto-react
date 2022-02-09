import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      buttonTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;
