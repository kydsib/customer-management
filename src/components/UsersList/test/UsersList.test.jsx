import { render, screen } from '@testing-library/react'

import UsersList from '../UsersList'

describe('<UsersList />', () => {
	it('Shows info message when there are no active users', () => {
		render(<UsersList />)
		expect(screen.getByText(/there are no users yet/i)).toBeInTheDocument()
	})

	it('renders saved users', () => {
		const useForm = jest.fn()

		useForm.mockReturnValue({
			city: 'Vilnius',
			email: 'dsad@dasd.lt',
			fullName: 'Testi',
			houseNo: '22',
			id: 1618846253028,
			street: 'Kauno',
			zip: '12',
		})
		// mock use from

		render(<UsersList />)
		const { validUsers } = useForm()
		screen.debug()
		// return validUsers from mocked useForm?
		// test that data is rendered
	})
})
