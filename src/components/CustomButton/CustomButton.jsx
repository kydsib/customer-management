import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const CustomButton = ({
	children,
	color = 'primary',
	variant = 'contained',
	type = 'submit',
	handleClick,
}) => {
	const classes = useStyles()
	return (
		<Button
			className={classes.btn}
			onClick={handleClick}
			variant={variant}
			color={color}
			children={children}
			type={type}
		/>
	)
}

export default CustomButton

const useStyles = makeStyles(() => ({
	btn: {
		display: 'flex',
		width: '100%',
		marginTop: '1rem',
	},
}))
