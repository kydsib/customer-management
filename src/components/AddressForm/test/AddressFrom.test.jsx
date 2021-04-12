import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AddressForm from '../AddressForm'

describe('<AddressFrom />', () => {
	it('submiting the form calls onSubmit with newly entered values', () => {
		const handleSubmit = jest.fn()
		render(<AddressForm onSubmit={handleSubmit} />)

		const nameAndSurname = 'New Name'
		const email = 'test@gmail.com'
		const cityAndCountry = 'Vilnius, Lithuania'

		userEvent.type(screen.getByTestId('nameInput'), nameAndSurname)
		userEvent.type(screen.getByTestId('email'), email)
		userEvent.type(screen.getByTestId('city', cityAndCountry))

		userEvent.click(screen.getByRole('button', { name: /submit/i }))

		expect(handleSubmit).toHaveBeenCalledWith({
			nameAndSurname,
			email,
			cityAndCountry,
		})

		// expect(handleSubmit).toHaveBeenCalledTimes(1)
	})

	it('handles selected address from autofil feature', () => {})

	it('checks if provided address is existant', () => {})

	it('submits correct addres and saves it in LocalStorage', () => {})
})
