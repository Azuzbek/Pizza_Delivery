import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'
import Button from '../../components/Button/Button'
import cn from 'classnames'
export function Layout() {
	const location = useLocation()
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src='/public/avatar.png' alt='' />
					<p className={styles['name']}>Azuz Kalykulov</p>
					<p className={styles['email']}>kanalc@bk.ru</p>
				</div>
				<nav className={styles['navigation']}>
					<NavLink
						className={({ isActive }) =>
							cn(styles['Link'], { [styles.active]: isActive })
						}
						to='/'
					>
						<img
							className={styles['Link_icon']}
							src='/public/menu-icon.svg'
							alt=''
						/>
						Menu
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							cn(styles['Link'], { [styles.active]: isActive })
						}
						to='/cart'
					>
						<img
							className={styles['Link_icon']}
							src='/public/cart-icon.svg'
							alt=''
						/>
						Корзина
					</NavLink>
				</nav>
				<Button className={styles['exit']}>
					<img src='/public/exit-item.svg' alt='' />
					Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet></Outlet>
			</div>
		</div>
	)
}
