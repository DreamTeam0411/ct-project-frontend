import styles from './CategoriesWideUI.module.css'

export const CategoriesWideUI = (props:{content:string, path:string}) => {
	return (
		<div className={styles.container}>
			<img src={props.path} alt=""/>
			<div className={styles.content}>{props.content}</div>
		</div>
	)
}