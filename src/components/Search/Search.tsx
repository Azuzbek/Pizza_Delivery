import { forwardRef } from 'react'
import styles from './Search.module.css'
import cn from 'classnames'
import { SearchProps } from './Search.props'

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
	{ isValid = true, className, ...props },
	ref
) {
	return (
		<div className={styles['search_wrapper']}>
			<input
				ref={ref}
				className={cn(styles['input'], className, {
					[styles['valid']]: isValid,
				})}
				{...props}
			/>
			<img src='/public/search.svg' alt='' className={styles['icon']} />
		</div>
	)
})

export default Search
