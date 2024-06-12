import { HtmlHTMLAttributes, ReactNode } from 'react'

export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
}
