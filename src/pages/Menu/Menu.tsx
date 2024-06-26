import { useEffect, useState } from 'react'
import { Product } from '../../Interfaces/Product.interface'
import Card from '../../components/Card/Card'
import Search from '../../components/Search/Search'
import Title from '../../components/Title/Title'
import { PREFIX } from '../../helpers/API'
import styles from './Menu.module.css'
import axios from 'axios'

export function Menu() {
	const [products, setProducts] = useState<Product[]>([])
	const getMenu = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data)
		} catch (e) {
			console.error(e)
			return
		}
	}
	useEffect(() => {
		getMenu()
	}, [])
	return (
		<>
			<div className={styles['head']}>
				<Title>Меню</Title>
				<Search placeholder='Введите блюдо или состав'></Search>
			</div>
			<div>
				{products.map(product => (
					<Card
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.ingredients.join(', ')}
						price={product.price}
						image={product.image}
						rating={product.rating}
					></Card>
				))}
			</div>
		</>
	)
}
