import styles from "./AppointmentBlock.module.css";

export interface Data {
  tel: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppointmentBlock: React.FC<Data> = ({ tel, setActive }) => {
  function formatPhoneNumber(phoneNumber: string) {
    const country = phoneNumber.slice(0, 2);
    const operator = phoneNumber.slice(2, 5);
    const rest = phoneNumber.slice(5);
    const formattedNumber = `+${country}(${operator}) ${rest.slice(
      0,
      3
    )} ${rest.slice(3, 5)} ${rest.slice(5)}`;

    return formattedNumber;
  }

  const formattedPhoneNumber = formatPhoneNumber(tel);

  return (
    <div className={styles.appointmentBlock}>
      <div>
        <button
          onClick={() => setActive(true)}
          className={styles.appointmentButton}
        >
          <img src="/ExitIcon.svg" alt='exit' className={styles.appointmentImgButton} />


        </button>
      </div>

      <h1 className={styles.appointmentWelcome}>Вітаю!</h1>
      <p className={styles.appointmentText}>
        Для запису у салон, будь-ласка, зателефонуйте за вказаним номером:
      </p>
      <div className={styles.appointmentTel}><a href={`tel:${formattedPhoneNumber}`}>{formattedPhoneNumber}</a></div>
    </div>
  );
};
