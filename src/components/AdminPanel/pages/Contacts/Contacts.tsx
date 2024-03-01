import styles from "../Documents/Documents.module.css";
import { useForm } from "react-hook-form";
import { useStoreContacts } from "../../../../stores/localStores/contactsStore.tsx";
import { useState } from "react";
import { motion } from "framer-motion";

function Contacts() {
  const { register, handleSubmit, setValue } = useForm();
  const { phoneNumber, email, setPhoneNumber, setEmail } = useStoreContacts();
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (data) => {
    setPhoneNumber(data.phoneNumber);
    setEmail(data.email);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const onReset = () => {
    setValue("phoneNumber", ""); // Очистите поле ввода номера телефона
    setValue("email", "");
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ x: "5%", opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Контакти</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="email"
            defaultValue={email}
            name="email"
            placeholder="Введіть электронную почту"
          />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="phoneNumber">Номер телефону</label>
          <input
            {...register("phoneNumber")}
            type="tel"
            defaultValue={phoneNumber}
            name="phoneNumber"
            placeholder="Введіть номер телефона"
          />
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={onReset}>
            Відмінити
          </button>
          <button type="submit">Зберегти</button>
        </div>
      </form>
      {showMessage && <div className={styles.messageShow}>Збереженно</div>}
    </motion.div>
  );
}

export default Contacts;
