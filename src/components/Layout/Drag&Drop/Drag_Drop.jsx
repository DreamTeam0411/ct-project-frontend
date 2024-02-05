import React, { useState } from "react";
import styles from "./Drag_Drop.module.css";

function FileUpload() {
  const [file, setFile] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile([...e.target.files]);
    }
  };

  const handleReset = () => {
    setFile([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    fetch("https://someapi", { method: "POST", body: data })
      .then((response) => response.json())
      .then(() => setFile([]))
      .catch(() => setFile([]));
  };

  const handleDrag = function (e) {
    e.preventDefault();
    setDragActive(true);
  };

  const handleLive = function (e) {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = function (e) {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile([...e.dataTransfer.files]);
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={`${styles.form} ${dragActive ? styles.drag : ""}`}
        onReset={handleReset}
        onSubmit={handleSubmit}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleLive}
        onDrop={handleDrop}
      >
        <label className={styles.label}>
          <input
            className={styles.input}
            type="file"
            multiple={true}
            onChange={handleChange}
          />
        </label>
        <div>
          <h2 className={styles.h2}>
            Натисніть, щоб завантажити, або перетягніть фото сюди
          </h2>
          <p className={styles.p}> SVG, PNG, JPG чи GIF (до 2Мб)</p>
        </div>
      </form>
      {file.length > 0 && (
        <div className={styles.addedFile}>
          {file.map(({ name }, id) => (
            <p key={id} className={styles.file_name}>
              {name}
            </p>

          ))}
          <button type="reset" className={styles.deleteFileButton} onClick={ handleReset}>
            <img src="/ExitIcon_grey.svg" className={styles.deleteFileImg} />
          </button>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
