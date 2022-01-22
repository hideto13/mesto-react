function ImagePopup() {
  return (
    <section className="popup popup_photo">
      <figure className="popup__wrapper">
        <button className="popup__close" type="button"></button>
        <img className="popup__image" alt="" />
        <figcaption className="popup__description"></figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
