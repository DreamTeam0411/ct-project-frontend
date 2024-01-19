import styles from './City.module.css'
import {PropsWithChildren} from "react";

interface CityProps {
	onClick?: () => void;
  }



export const City = ({children, onClick}:PropsWithChildren<CityProps>) => {
	return (
		<div className={styles.container} onClick={onClick}>
			{children}
		</div>
	)
}