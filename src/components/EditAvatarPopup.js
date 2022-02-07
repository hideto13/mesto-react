import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonTitle="Соxранить"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditAvatarPopup;
