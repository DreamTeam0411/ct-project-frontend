import styles from "./Business.module.css";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useBusinessStore } from "../../../../stores/localStores/for_business.tsx";
import { motion } from "framer-motion";

function Business() {
  const { register, handleSubmit, setValue, reset } = useForm();
  const {
    title,
    subtitle,
    contentSubtitle,
    content,
    photo,
    setTitle,
    setSubtitle,
    setContentSubtitle,
    setContent,
    setPhoto,
  } = useBusinessStore();
  const fileInputRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [subtitleLength, setSubtitleLength] = useState(0);
  const [contentLength, setContentLength] = useState(0);

  const handleSubtitleChange = (event) => {
    if (event.target.value.length <= 300) {
      setValue("subtitle", event.target.value);
      setSubtitleLength(event.target.value.length);
    }
  };

  const handleContentChange = (event) => {
    if (event.target.value.length <= 300) {
      setValue("content", event.target.value);
      setContentLength(event.target.value.length);
    }
  };

  useEffect(() => {
    setSubtitleLength(subtitle.length);
    setContentLength(content.length);
  }, [subtitle, content]);

  const onSubmit = (data) => {
    const { title, subtitle, contentSubtitle, content, photo } = data;
    if (imageFile) {
      setPhoto(URL.createObjectURL(imageFile));
    } else {
      setPhoto(null);
    }

    setTitle(title);
    setSubtitle(subtitle);
    setContentSubtitle(contentSubtitle);
    setContent(content);
    setPhoto(photo);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleImageChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setValue("photo", URL.createObjectURL(event.target.files[0]));
      setPhoto(URL.createObjectURL(event.target.files[0]));
      setImageFile(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleReset = () => {
    reset({
      title: "",
      subtitle: "",
      contentSubtitle: "",
      content: "",
      photo: "",
    });
    setPhoto(null);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ x: "5%", opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Для бізнесу</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Основні дані</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Заголовок</label>
              <input
                {...register("title")}
                defaultValue={title}
                type="text"
                placeholder="Введіть заголовок"
              />
              <label htmlFor="subtitle">Підзаголовок</label>
              <textarea
                {...register("subtitle")}
                defaultValue={subtitle}
                placeholder="Введіть підзаголовок"
                onChange={handleSubtitleChange}
                maxLength={300}
              ></textarea>
              <p className={subtitleLength > 300 ? styles.red : styles.p}>
                {subtitleLength}/300
              </p>
            </div>
            <div className={styles.inputsSubtitle}>
              <label htmlFor="content-subtitle">Заголовок контенту</label>
              <input
                {...register("contentSubtitle")}
                defaultValue={contentSubtitle}
                type="text"
                placeholder="Введіть заголовок контенту"
              />
              <label htmlFor="content">Контент</label>
              <textarea
                {...register("content")}
                defaultValue={content}
                placeholder="Введіть текст контенту"
                onChange={handleContentChange}
                maxLength={300}
              ></textarea>
              <p className={contentLength > 300 ? styles.red : styles.p}>
                {contentLength}/300
              </p>
            </div>
          </div>
          <div className={styles.photo}>
            <h2>Фото</h2>
            <div className={styles.photoBlock}>
              <img
                src={photo}
                alt="Selected"
                onClick={handleImageClick}
                className={styles.photoBlockImage}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={handleReset}>
            Відмінити
          </button>
          <button type="submit">Зберегти</button>
        </div>
      </form>
      {showMessage && <div className={styles.messageShow}>Збереженно</div>}
    </motion.div>
  );
}

export default Business;
