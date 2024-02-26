import { useRef, useState } from "react";
import styles from "./BookmarkBanner.module.css";
import { useStoreBanner } from "../../../../stores/localStores/banner_store.tsx";

const BookmarkBanner = () => {
  const { item, updateItem } = useStoreBanner();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "titleSecondLineText" && value.length > 300) {
      return; // не обновляем значение, если оно превышает 300 символов
    }
    updateItem(name, value);
    setMessage("Збережено");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 3000);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Будь ласка, завантажте лише зображення.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        updateItem("image", reader.result);
      } else {
        alert(
          "Помилка при завантаженні зображення. Спробуйте інше зображення."
        );
      }
    };
    reader.onerror = () => {
      alert("Помилка при читанні файлу. Спробуйте інший файл.");
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    updateItem("titleFirstLineText", "");
    updateItem("titleSecondLineText", "");
    updateItem("image", "");
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleInputChange}>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Редагувати банер</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Заголовок</label>
              <input
                type="text"
                name="titleFirstLineText"
                placeholder="Введіть заголовок"
                value={item.titleFirstLineText}
                onChange={handleInputChange}
              />
              <label htmlFor="subtitle">Підзаголовок</label>
              <textarea
                placeholder="Введіть підзаголовок"
                name="titleSecondLineText"
                value={item.titleSecondLineText}
                onChange={handleInputChange}
              ></textarea>
              <p className={styles.p}>{item.titleSecondLineText.length}/300</p>
            </div>
          </div>
          <div className={styles.photo}>
            <h2>Фото</h2>
            <div className={styles.photoBlock} onClick={handleImageClick}>
              <img src={item.image} alt="Банер" className={styles.image} />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={resetForm}>
            Відмінити
          </button>
          <button type={"submit"}>Зберегти</button>
        </div>
      </form>
      {showMessage && (
        <div
          className={styles.message}
          style={{ transition: "opacity 1s", opacity: showMessage ? 1 : 0 }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default BookmarkBanner;
