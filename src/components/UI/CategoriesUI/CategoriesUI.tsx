import styles from './CategoriesUI.module.css'

export const CategoriesUI = (props:{content:string, path:string}) => {
	return (
		<div className={styles.container}>
			<img src={props.path} alt=""/>
			<div className={styles.content}>{props.content}</div>
		</div>
	)
}