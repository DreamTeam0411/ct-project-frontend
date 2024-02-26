import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import useFetchAdminCategories from "../../../../../stores/AdminStore/fetch_admin_categories.tsx";
import styles from "./AddMaster.module.css";
import useFetchAdminMasters from "../../../../../stores/AdminStore/fetch_admin_all_masters.tsx";

const AddMaster = () => {
  const { dataCategory, fetchData } = useFetchAdminCategories();
  const { addMaster } = useFetchAdminMasters();
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleDescriptionChange = (event) => {
    if (event.target.value.length <= 300) {
      setDescription(event.target.value);
    }
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    addMaster({ ...data, image });
    setMessage("Збережено");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 3000);
    reset();
  };

  return (
    <div className={styles.container}>
      <h1>Додати майстра</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Основні дані</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="name">Ім'я</label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Введіть ім'я"
              />
            </div>
            <div className={styles.inputsTitle}>
              <label htmlFor="surname">Прізвище</label>
              <input
                {...register("surname")}
                type="text"
                name="surname"
                placeholder="Введіть прізвище"
              />
            </div>
            <div className={styles.inputsTitle}>
              <label htmlFor="phone">Номер телефону</label>
              <input
                {...register("phone")}
                type="number"
                name="phone"
                placeholder="Введіть номер телефону"
              />
            </div>
            <div className={styles.inputsSubtitle}>
              <label htmlFor="social">Посилання на соціальну мережу</label>
              <input
                {...register("social")}
                type="text"
                name="social"
                placeholder="https://www.instagram.com/"
              />
            </div>
            <div className={styles.inputsSubtitle}>
              <label htmlFor="service">Назва послуги</label>
              <select
                {...register("service")}
                className={styles.select}
                name="service"
                placeholder="Введіть заголовок"
              >
                <option value="" hidden selected>
                  Виберіть послугу
                </option>
                {dataCategory.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputsSubtitle}>
              <label htmlFor="address">Адреса обслуговування</label>
              <input
                {...register("address")}
                type="text"
                name="address"
                placeholder="вул. Макарова 18, м. Київ"
              />
            </div>
            <div className={styles.inputsSubtitle}>
              <label htmlFor="description">Короткий опис</label>
              <textarea
                maxLength={300}
                {...register("description")}
                placeholder="Введіть текст контенту"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
              <p className={styles.p}>{description.length}/300</p>
            </div>
          </div>
          <div className={styles.photo}>
            <h2>Фото</h2>
            <div
              className={styles.photoBlock}
              onClick={() => document.getElementById("fileInput").click()}
            >
              {image ? (
                <img src={image} alt="Uploaded" />
              ) : (
                <p className={styles.downloadImage}>+ Додати зображення</p>
              )}
              <input
                id="fileInput"
                type="file"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={() => reset()}>
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
    </div>
  );
};

export default AddMaster;
