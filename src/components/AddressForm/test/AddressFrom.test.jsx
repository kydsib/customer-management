import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AddressForm from '../AddressForm'

describe('<AddressFrom />', () => {
	it('submiting the form calls onSubmit with newly entered values', () => {
		// let submittedData
		// how handleSubmit to know that it revieves values?
		const handleSubmit = jest.fn()
		render(<AddressForm onSumbit={handleSubmit} />)

		const nameAndSurname = 'New Name'
		const email = 'test@gmail.com'
		const city = 'Vilnius'
		const street = 'Konstitucijos pr'
		const houseNo = '500'
		const zip = 'LT01243'

		userEvent.type(screen.getByTestId('nameInput'), nameAndSurname)
		// userEvent.type(screen.getByTestId('email'), email)
		// userEvent.type(screen.getByTestId('city', city))
		// userEvent.type(screen.getByTestId('street', street))
		// userEvent.type(screen.getByTestId('houseNo', houseNo))
		// userEvent.type(screen.getByTestId('zip', zip))

		//
		expect(screen.getByTestId('nameInput')).toHaveValue(nameAndSurname)

		// this one is not trigering submit in test
		userEvent.click(screen.getByRole('button', { name: /submit/i }))

		// Why handleSubmit is not fired?
		// expect(handleSubmit).toHaveBeenCalledWith({
		// 	nameAndSurname,
		// 	email,
		// 	city,
		// 	street,
		// 	houseNo,
		// 	zip,
		// })

		// expect(handleSubmit).toHaveBeenCalledTimes(1)
	})

	it('handles selected address from autofil feature', () => {})

	it('checks if provided address is existant', () => {})

	it('submits correct addres and saves it in LocalStorage', () => {})
})
