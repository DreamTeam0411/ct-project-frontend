import styles from "./Documents.module.css";
import useFetchData from "../../../../stores/fetchData.tsx";
import { ADMIN_FOOTER_UPDATE } from "../../../../stores/ROUTES.tsx";
import axios from "axios";
import { useState } from "react";

export const Documents = () => {
  const dataState = useFetchData((state) => state.data);
  const [formData, setFormData] = useState({
    description: "Footer links",
    privacyPolicyLink: dataState.footer.privacyPolicyLink,
    termsAndCondition: dataState.footer.termsAndCondition,
  });
  const [showMessage, setShowMessage] = useState(false);
  const token = localStorage.getItem("token");
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(ADMIN_FOOTER_UPDATE, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert("Error updating resource");
        console.error(error);
      });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleClearForm = () => {
    setFormData({
      description: "Footer links",
      privacyPolicyLink: "",
      termsAndCondition: "",
    });
  };
  return (
    <div className={styles.container}>
      <h1>Документи</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <label htmlFor="termsAndCondition">Умови використання</label>
          <input
            type="text"
            name="termsAndCondition"
            placeholder="Додайте посилання"
            value={formData.termsAndCondition}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="privacyPolicyLink">Політика конфіденційності</label>
          <input
            className={styles.inputData}
            type="text"
            name="privacyPolicyLink"
            placeholder="Додайте посилання"
            onChange={handleChange}
            value={formData.privacyPolicyLink}
          />
        </div>
        <div className={styles.buttons}>
          <button type={"button"} onClick={handleClearForm}>
            Відмінити
          </button>
          <button type={"submit"}>Зберегти</button>
        </div>
      </form>
      {showMessage && <div className={styles.messageShow}>Збереженно</div>}
    </div>
  );
};
