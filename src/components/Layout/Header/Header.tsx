import styles from './Header.module.css'
import {Link} from "react-router-dom";
import useFetchData from "../../../stores/fetchData.tsx";
import {Button} from "../../UI/buttons/Button/Button.tsx";
const Header = ()=> {
	const dataState = useFetchData(state => state.data)


	return (<div className={styles.headerBlock}>
			<div className={styles.header}>
				<div className={styles.linksBlock}>
					<Link to={'/'}>
						<div className={styles.logo}>{dataState.logo}</div>
					</Link>
					<Link to={'/services-all'}>
						<div className={styles.links}>{'ВСІ СЕРВІСИ'} </div>
					</Link>
				</div>
				<div className={styles.headerButtons}>
					<input placeholder={'Пошук'}/>
					<Link to="/login"><Button children={'Увійти'}/></Link>
					<div className={styles.buttonBusiness}>
						<Button children={'Для бізнесу'} />
					</div>

				</div>
			</div>

		</div>


	)
}
export default Header