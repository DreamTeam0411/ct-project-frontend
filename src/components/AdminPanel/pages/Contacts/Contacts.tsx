import styles from "../Documents/Documents.module.css";
import useFetchData from "../../../../stores/fetchData.tsx";

function Contacts() {
  const dataState = useFetchData((state) => state.data);
  // const [formData, setFormData] = useState({
  //   description: "Footer links",
  //   privacyPolicyLink: dataState.footer.privacyPolicyLink,
  //   termsAndCondition: dataState.footer.termsAndCondition,
  // });
  // const token = localStorage.getItem("token");
  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  console.log(dataState);

  return (
    <div className={styles.container}>
      <h1>Контакти</h1>
      <form>
        <div className={styles.inputs}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="phone">Номер телефону</label>
          <input type="tel" name="phone" />
        </div>
        <div className={styles.buttons}>
          <button>Відмінити</button>
          <button>Зберегти</button>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
