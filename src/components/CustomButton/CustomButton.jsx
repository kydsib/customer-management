import React from 'react'
import { Button } from '@material-ui/core'

const CustomButton = ({
	children,
	color = 'primary',
	variant = 'contained',
	type = 'submit',
}) => {
	return (
		<Button
			variant={variant}
			color={color}
			children={children}
			type={type}
		/>
	)
}

export default CustomButton
