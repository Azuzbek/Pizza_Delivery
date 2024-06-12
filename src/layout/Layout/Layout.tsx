import { Link, Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<div>
			<div>
				<Link to='/'>Menu</Link>
				<Link to='/cart'>Корзина</Link>
			</div>
			<div>
				<Outlet></Outlet>
			</div>
		</div>
	)
}
