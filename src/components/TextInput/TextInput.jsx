import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = ({
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
	return (
		<TextField
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

export default TextInput
