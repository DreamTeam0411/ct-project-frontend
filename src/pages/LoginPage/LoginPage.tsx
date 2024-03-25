import styles from "./LoginPage.module.css";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegistrationForm} from "../RegistrationPage/RegistrationPageTypes.tsx";

import {useGetData} from "../../stores/auth";
import {useEffect} from "react";
import {motion} from "framer-motion";

interface GetDataFunction {
    execute: (email: string | number, password: string | number) => void; // Adjust the return type as needed
}

const LoginPage = () => {
    const getData = useGetData() as GetDataFunction;
    const local = localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        if (local) {
            alert("Вхід успішний");
            navigate("/admin-panel/main-page/banner");
        }
    }, [local]);

    const {
        register,
        // reset,
        handleSubmit,
        formState: {errors},
    } = useForm<RegistrationForm>({mode: "onChange"});
    const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
        getData.execute(data.email, data.password);
        !errors && alert("Вхід успішний");
        console.log(errors)
    };

    const forgetPassword = () => {
        alert("Звернітся до адміністратора!");
    };

    function togglePassword() {
        const x = document.getElementById("password") as HTMLInputElement;
        const eyeIcon = document.getElementById("eyeIcon") as HTMLImageElement;
        if (x.type === "password") {
            x.type = "text";
            eyeIcon.src = "/eye-open-min.svg";
        } else {
            x.type = "password";
            eyeIcon.src = "/eye-close-min.svg";
        }
    }

    return (
        <motion.div className={styles.container}>
            <div className={styles.loginBlock}>
                <Link to={"/"} className={styles.logo}>
                    <div className={styles.logo}>
                        {
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="112"
                                height="12"
                                viewBox="0 0 112 12"
                                fill="none"
                            >
                                <path
                                    d="M0 11.7534V10.8329L1.45783 10.4712V1.52877L0 1.16712V0.246575H4.84885C6.08484 0.246575 7.06728 0.471267 7.7962 0.920548C8.52511 1.35894 8.88957 2.06579 8.88957 3.0411C8.88957 3.63288 8.68357 4.1699 8.27157 4.65205C7.85958 5.12332 7.37361 5.4301 6.81375 5.5726V5.62192C7.69052 5.7863 8.38774 6.12606 8.90541 6.6411C9.42308 7.14524 9.68186 7.7699 9.68186 8.51507C9.68186 9.49038 9.28047 10.274 8.47757 10.8658C7.67468 11.4575 6.66054 11.7534 5.43515 11.7534H0ZM4.04071 10.5863H4.59532C6.2327 10.5863 7.05144 9.89589 7.05144 8.51507C7.05144 7.84654 6.85069 7.32606 6.44929 6.95342C6.05839 6.58079 5.46685 6.39452 4.67455 6.39452H4.04071V10.5863ZM4.04071 5.19452H4.26256C4.82241 5.19452 5.29254 5.01914 5.67284 4.66849C6.06374 4.31784 6.25914 3.82469 6.25914 3.18904C6.25914 2.00548 5.56192 1.4137 4.16748 1.4137H4.04071V5.19452ZM10.6 11.7534V10.8329L12.0579 10.4712V1.52877L10.6 1.16712V0.246575H19.0142V3.61644H18.0793L17.4455 1.51233H14.6407V5.32603L17.5881 5.04658V6.67397L14.6407 6.4274V10.4877H17.4772L18.5547 8.20274H19.4896L19.0142 11.7534H10.6ZM19.8997 11.7534V10.8329L21.4527 10.4548L25.2399 0.164383H26.6185L30.168 10.4548L31.6892 10.8329V11.7534H26.3174V10.8329L27.4425 10.5534L26.7611 8.58082H23.4335L22.7204 10.5041L24.0514 10.8329V11.7534H19.8997ZM23.8613 7.44658H26.3649L25.129 3.9452L23.8613 7.44658ZM31.047 1.16712V0.246575H36.5456V1.16712L35.0877 1.52877V7.44658C35.0877 9.55068 35.9276 10.6027 37.6072 10.6027C38.4312 10.6027 39.0914 10.3397 39.588 9.8137C40.095 9.27668 40.3486 8.48764 40.3486 7.44658V1.52877L38.8908 1.16712V0.246575H43.1058V1.16712L41.6479 1.52877V7.44658C41.6479 8.91503 41.2201 10.0438 40.3644 10.8329C39.5192 11.6109 38.4471 12 37.1477 12C35.7955 12 34.681 11.6109 33.8042 10.8329C32.9379 10.0438 32.5048 8.91503 32.5048 7.44658V1.52877L31.047 1.16712ZM43.4949 3.73151V0.246575H53.2401V3.73151H52.2735L51.6239 1.51233H49.659V10.4712L51.1168 10.8329V11.7534H45.6182V10.8329L47.0761 10.4712V1.51233H45.0953L44.4456 3.73151H43.4949ZM53.4489 1.16712V0.246575H58.6468V1.16712L57.6164 1.38082L59.8827 4.83288L61.911 1.49589L60.7384 1.16712V0.246575H64.7791V1.16712L63.3213 1.52877L60.469 6.23014V10.4712L61.9269 10.8329V11.7534H56.4279V10.8329L57.8858 10.4712V6.2137L54.7324 1.49589L53.4489 1.16712ZM65.2248 11.7534V10.8329L66.6826 10.4712V1.52877L65.2248 1.16712V0.246575H70.0737C71.3096 0.246575 72.2921 0.471267 73.021 0.920548C73.7499 1.35894 74.1144 2.06579 74.1144 3.0411C74.1144 3.63288 73.9084 4.1699 73.4964 4.65205C73.0844 5.12332 72.5991 5.4301 72.0386 5.5726V5.62192C72.916 5.7863 73.6132 6.12606 74.1302 6.6411C74.6482 7.14524 74.9067 7.7699 74.9067 8.51507C74.9067 9.49038 74.5056 10.274 73.7024 10.8658C72.9002 11.4575 71.886 11.7534 70.66 11.7534H65.2248ZM69.2655 10.5863H69.8201C71.4582 10.5863 72.2762 9.89589 72.2762 8.51507C72.2762 7.84654 72.0762 7.32606 71.6741 6.95342C71.2839 6.58079 70.6917 6.39452 69.8994 6.39452H69.2655V10.5863ZM69.2655 5.19452H69.4874C70.0479 5.19452 70.5173 5.01914 70.8976 4.66849C71.2888 4.31784 71.4839 3.82469 71.4839 3.18904C71.4839 2.00548 70.7867 1.4137 69.3923 1.4137H69.2655V5.19452ZM76.0763 6C76.0763 4.22466 76.5467 2.78353 77.4866 1.67671C78.4373 0.558904 79.7892 0 81.5431 0C83.2753 0 84.6172 0.54791 85.568 1.64384C86.5297 2.73976 87.01 4.19178 87.01 6C87.01 7.79723 86.5297 9.24935 85.568 10.3562C84.6172 11.4521 83.2753 12 81.5431 12C79.811 12 78.4641 11.4575 77.5024 10.3726C76.5517 9.27668 76.0763 7.81921 76.0763 6ZM81.5431 10.8658C82.4622 10.8658 83.1594 10.4438 83.6348 9.6C84.1102 8.7452 84.3479 7.5452 84.3479 6C84.3479 4.45479 84.1052 3.26024 83.6189 2.41644C83.1436 1.56164 82.4513 1.13425 81.5431 1.13425C80.6241 1.13425 79.9268 1.56164 79.4515 2.41644C78.9761 3.26024 78.7384 4.45479 78.7384 6C78.7384 7.5452 78.9711 8.7452 79.4356 9.6C79.911 10.4438 80.6132 10.8658 81.5431 10.8658ZM88.348 6C88.348 4.22466 88.8174 2.78353 89.7583 1.67671C90.709 0.558904 92.0609 0 93.8148 0C95.547 0 96.8889 0.54791 97.8397 1.64384C98.8003 2.73976 99.2817 4.19178 99.2817 6C99.2817 7.79723 98.8003 9.24935 97.8397 10.3562C96.8889 11.4521 95.547 12 93.8148 12C92.0817 12 90.7348 11.4575 89.7731 10.3726C88.8233 9.27668 88.348 7.81921 88.348 6ZM93.8148 10.8658C94.7339 10.8658 95.4311 10.4438 95.9065 9.6C96.3819 8.7452 96.6196 7.5452 96.6196 6C96.6196 4.45479 96.3759 3.26024 95.8906 2.41644C95.4153 1.56164 94.723 1.13425 93.8148 1.13425C92.8958 1.13425 92.1985 1.56164 91.7232 2.41644C91.2478 3.26024 91.0101 4.45479 91.0101 6C91.0101 7.5452 91.2418 8.7452 91.7073 9.6C92.1827 10.4438 92.8849 10.8658 93.8148 10.8658ZM100.322 11.7534V10.8329L101.779 10.4712V1.52877L100.322 1.16712V0.246575H105.82V1.16712L104.362 1.52877V10.4712L105.82 10.8329V11.7534H100.322ZM104.711 6.01644L108.134 1.49589L107.167 1.16712V0.246575H111.287V1.16712L109.782 1.52877L107.119 4.96438L110.51 10.1425L112 10.8329V11.7534H108.324L104.711 6.01644Z"
                                    fill="#044AB2"
                                />
                            </svg>
                        }
                    </div>
                </Link>

                <motion.div
                    initial={{x: -60, opacity: 0}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, transition: {duration: 0.1, ease: "linear"}}}
                    transition={{duration: 0.5, ease: "linear"}}
                    className={styles.loginForm}
                >
                    <h2 className={styles.loginHeader}>Вхід </h2>
                    <form
                        action=""
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.email}>
                            <label htmlFor="email">Email:</label>
                            <input
                                placeholder="example@gmail.com"
                                {...register("email", {
                                    required: "Це поле є обов'язковим",
                                    pattern: {
                                        value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                                        message: "Невірний email",
                                    },
                                })}
                                type="email"
                                id="email"
                                name="email"
                            ></input>
                            <div className={styles.error}>
                                {errors?.email && <p>{errors?.email?.message}</p>}
                            </div>
                        </div>


                        <div className={styles.password}>
                            <label htmlFor="password">Password:</label>
                            <input
                                placeholder="Ввведіть password"
                                {...register("password", {
                                    required: "Обов'язкове для заповнення",
                                    // pattern: {
                                    //   value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                                    //   message: "Невірний password",
                                    // },
                                })}
                                type="password"
                                id="password"
                                name="password"
                            />

                            <button className={styles.toggleButton} onClick={togglePassword}>
                                <img id="eyeIcon" src="/eye-close-min.svg" alt=""/>
                            </button>

                            <div className={styles.errorP}>
                                {errors?.password && <p>{errors?.password?.message}</p>}
                            </div>
                        </div>

                        <div
                            className={styles.forgetPassword}
                            onClick={() => forgetPassword()}
                        >
                            <p className={styles.forgetlink}>Не пам’ятаю пароль</p>
                        </div>

                        <div className={styles.formButton}>
                            <button type={"submit"} className={styles.bn54}>
                                <span>Увійти</span>
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>


            <motion.div
                initial={{x: "40%", opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                className={styles.loginImg}
            >
                <img src="/LoginImg-min.jpg" alt="login"/>
            </motion.div>
        </motion.div>
    );
};
export default LoginPage;
