import { FC } from 'react';
import { ButtonProps } from './types';


export const Button: FC<ButtonProps> = ({
	size = 'medium',
	variant = 'default',
	color = 'primary',
	children = '',
	className = '',
	...props
}) => {


	return (
		<button className={className} type={'button'} {...props}>
			{children}
		</button>
	);
};
