import styles from "./RegistrationPage.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegistrationForm } from "./RegistrationPageTypes.tsx";
import Header from "../../components/Layout/Header/Header.tsx";
import Footer from "../../components/Layout/Footer/Footer.tsx";

const RegistrationPage = () => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({ mode: "onChange" });
  
  const submit: SubmitHandler<RegistrationForm> = () => {
    reset();
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.registrationForm}>
        <h2>Реєстрація</h2>
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Ім'я</label>
          <div className={styles.error}>
            {errors?.name && <p>{errors?.name?.message}</p>}
          </div>
          <input
            type="text"
            placeholder="введіть ім'я"
            {...register("name", {
              required: "Обов'язкове для заповнення",
              minLength: {
                value: 3,
                message: "Мінімум три символи",
              },
              pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z]{2,20}$/,
                message: "Неправильні сімволи",
              },
            })}
          />
          <label htmlFor="surname">Фамілія</label>
          <div className={styles.error}>
            {errors?.surname && <p>{errors?.surname?.message}</p>}
          </div>
          <input
            type="text"
            placeholder="введіть фамілію"
            {...register("surname", {
              required: "Обов'язкове для заповнення",
              minLength: {
                value: 3,
                message: "Мінімум три символи",
              },
              pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z]{2,20}$/,
                message: "Неправильні сімволи",
              },
            })}
          />
          <label htmlFor="email">Електронна адреса</label>
          <div className={styles.error}>
            {errors?.email && <p>{errors?.email?.message}</p>}
          </div>
          <input
            type="email"
            placeholder="введіть електронну адресу"
            {...register("email", {
              required: "Обов'язкове для заповнення",
              pattern: {
                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                message: "Невірний email",
              },
            })}
          />
          <label htmlFor="password">Пароль</label>
          <div className={styles.error}>
            {errors?.password && <p>{errors?.password?.message}</p>}
          </div>
          <input
            type="password"
            placeholder="введіть пароль"
            {...register("password", {
              required: "Обов'язкове для заповнення",
              minLength: {
                value: 8,
                message: "Мінімум шість символів",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
                message: "Нерпавильний пароль",
              },
            })}
          />
          <label htmlFor="confirmPassword">Підтвердіть пароль</label>
          <div className={styles.error}>
            {errors?.confirmPassword && (
              <p>{errors?.confirmPassword?.message}</p>
            )}
          </div>
          <input
            type="password"
            placeholder="підтвердіть пароль"
            {...register("confirmPassword", {
              required: true,
              validate: (val: string | number) => {
                if (watch("password") != val) {
                  return "Ваш пароль не співпадає";
                }
              },
            })}
          />
          <div className={styles.formButton}>
            <button type="submit" disabled={!isValid}>
              Зареєструватися
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default RegistrationPage;
