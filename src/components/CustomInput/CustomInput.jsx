import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const CustomInput = ({
	variant = 'outlined',
	label,
	required = true,
	name,
	handleChange,
	placeHolder,
	value,
	type = 'text',
	inputProps,
	helperText,
	error,
}) => {
	const classes = useStyles()
	return (
		<TextField
			className={classes.item}
			type={type}
			required={required}
			error={error}
			name={name}
			label={label}
			helperText={helperText}
			variant={variant}
			onChange={handleChange}
			placeholder={placeHolder}
			value={value}
			inputProps={inputProps}
		/>
	)
}

export default CustomInput

const useStyles = makeStyles(() => ({
	item: {
		margin: '0.75rem 0rem',
	},
}))
