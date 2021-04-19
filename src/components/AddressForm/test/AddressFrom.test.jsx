import {
	render,
	waitForElementToBeRemoved,
	screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'

import AddressForm from '../AddressForm'
import { server } from '../../../mocks/server'

const nameAndSurname = 'New Name'
const email = 'test@gmail.com'
const city = 'Vilnius'
const street = 'Kauno g.'
const houseNo = '12'
const zip = '03214'

it('server error test', async () => {
	const testErrorMessage = 'We found nothing'
	server.use(
		rest.get(
			'https://maps.googleapis.com/maps/api/geocode/json',
			async (req, res, ctx) => {
				return res(
					ctx.status(500),
					ctx.json({ message: testErrorMessage })
				)
			}
		)
	)

	render(<AddressForm />)

	const nameInput = screen.getByTestId('nameInput')
	const emailInput = screen.getByTestId('email')
	const cityInput = screen.getByTestId('city')
	const streetInput = screen.getByTestId('street')
	const houseNoInput = screen.getByTestId('houseNo')
	const zipInput = screen.getByTestId('zip')

	userEvent.type(nameInput, nameAndSurname)
	userEvent.type(emailInput, email)
	userEvent.type(cityInput, city)
	userEvent.type(streetInput, street)
	userEvent.type(houseNoInput, houseNo)
	userEvent.type(zipInput, zip)

	userEvent.click(screen.getByRole('button', { name: /submit/i }))
	const loader = screen.getByRole('progressbar')
	expect(loader).toBeInTheDocument()

	await waitForElementToBeRemoved(() => screen.getByRole('progressbar'))
	expect(screen.getByText(testErrorMessage)).toBeInTheDocument()
})

it('Submits correct address', async () => {
	render(<AddressForm />)

	const nameInput = screen.getByTestId('nameInput')
	const emailInput = screen.getByTestId('email')
	const cityInput = screen.getByTestId('city')
	const streetInput = screen.getByTestId('street')
	const houseNoInput = screen.getByTestId('houseNo')
	const zipInput = screen.getByTestId('zip')

	userEvent.type(nameInput, nameAndSurname)
	userEvent.type(emailInput, email)
	userEvent.type(cityInput, city)
	userEvent.type(streetInput, street)
	userEvent.type(houseNoInput, houseNo)
	userEvent.type(zipInput, zip)

	expect(nameInput).toHaveValue(nameAndSurname)
	expect(emailInput).toHaveValue(email)
	expect(cityInput).toHaveValue(city)
	expect(streetInput).toHaveValue(street)
	expect(houseNoInput).toHaveValue(houseNo)
	expect(zipInput).toHaveValue(zip)

	const submitBtn = screen.getByRole('button', { name: /submit/i })
	userEvent.click(submitBtn)

	const loader = screen.getByRole('progressbar')
	expect(loader).toBeInTheDocument()

	await waitForElementToBeRemoved(() => screen.getByRole('progressbar'))

	expect(nameInput).toHaveValue('')
})
