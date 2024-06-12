import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { CardProps } from './Card.props'
function Card({ id, name, description, price, image, rating }: CardProps) {
	return (
		<Link to={`/product/${id}`} className={styles['link_card']}>
			<div className={styles['card']}>
				<div
					className={styles['header']}
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className={styles['price']}>
						{price} <span className={styles['currency']}>P</span>
					</div>
					<button className={styles['add']}>
						<img src='/public/add-to-cart.svg'></img>
					</button>
					<div className={styles['rating']}>
						{rating} <img src='/public/rating.svg' alt='' />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{name}</div>
					<div className={styles['desc']}>{description}</div>
				</div>
			</div>
		</Link>
	)
}
export default Card
