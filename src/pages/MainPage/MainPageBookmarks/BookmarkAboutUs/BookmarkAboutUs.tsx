import styles from "../BookmarkBanner/BookmarkBanner.module.css";
import { useStoreAboutUs } from "../../../../stores/localStores/aboutUsStore.tsx";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BookmarkAboutUs = () => {
  const { item, updateItem } = useStoreAboutUs();
  const { register, handleSubmit, setValue, reset, getValues } = useForm({
    defaultValues: {
      input1: `${item.titleFirstLineText}, ${item.titleSecondLineText}, ${item.titleThirdLineText}`,
      input2: `${item.descriptionFirstLineText}, ${item.descriptionSecondLineText}, ${item.descriptionThirdLineText}`,
      image: item.image,
    },
  });

  const fileInputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [text, setText] = useState(getValues("input2")); // Используйте useState для отслеживания изменений в поле textarea

  const handleInputChange = (event) => {
    setText(event.target.value); // Обновите состояние text при каждом изменении поля textarea
  };
  useEffect(() => {
    setText(getValues("input2")); // Обновите состояние text при изменении input2
  }, [getValues("input2")]);

  useEffect(() => {
    setValue(
      "input1",
      `${item.titleFirstLineText}, ${item.titleSecondLineText}, ${item.titleThirdLineText}`
    );
    setValue(
      "input2",
      `${item.descriptionFirstLineText}, ${item.descriptionSecondLineText}, ${item.descriptionThirdLineText}`
    );
    setValue("image", item.image);
  }, [item, setValue]);

  const onSubmit = (data) => {
    const [titleFirstLineText, titleSecondLineText, titleThirdLineText] =
      data.input1.split(", ");
    const [
      descriptionFirstLineText,
      descriptionSecondLineText,
      descriptionThirdLineText,
    ] = data.input2.split(", ");

    updateItem("titleFirstLineText", titleFirstLineText);
    updateItem("titleSecondLineText", titleSecondLineText);
    updateItem("titleThirdLineText", titleThirdLineText);
    updateItem("descriptionFirstLineText", descriptionFirstLineText);
    updateItem("descriptionSecondLineText", descriptionSecondLineText);
    updateItem("descriptionThirdLineText", descriptionThirdLineText);

    setMessage("Збережено");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 3000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      updateItem("image", reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleReset = () => {
    reset({
      input1: "",
      input2: "",
      image: "",
    });
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ x: 10, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Редагувати Про нас</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Заголовок</label>
              <input
                {...register("input1")}
                type="text"
                name="title"
                placeholder="Введіть заголовок"
              />
              <label htmlFor="subtitle">Підзаголовок</label>
              <textarea
                {...register("input2", { maxLength: 300 })}
                placeholder="Введіть підзаголовок"
                name="subtitle"
                onChange={handleInputChange}
              />
              <p
                className={styles.p}
                style={{ color: text.length > 300 ? "red" : "lightgray" }}
              >
                {text.length}/300
              </p>
            </div>
          </div>
          <div className={styles.photo}>
            <h2>Фото</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <img
              className={styles.image}
              src={item.image}
              alt="From store"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={handleReset}>
            Відмінити
          </button>
          <button type="submit">Зберегти</button>
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
    </motion.div>
  );
};

export default BookmarkAboutUs;
