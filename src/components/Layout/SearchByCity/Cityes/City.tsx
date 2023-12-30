import styles from './City.module.css'
import {PropsWithChildren} from "react";
const City = ({children}:PropsWithChildren) => {
	return (
		<div className={styles.city}>{children}</div>
	)
}
export default City