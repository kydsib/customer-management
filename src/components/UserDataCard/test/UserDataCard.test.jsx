import { render, screen } from '@testing-library/react'

import UserDataCard from '../UserDataCard'

describe('<UserDataCard />', () => {
	const user = {
		city: 'Vilnius',
		email: 'Test@email.com',
		fullName: 'Test Name',
		houseNo: '22',
		id: 1618900700998,
		street: 'Kauno',
		zip: '12',
	}

	const streetAndHouseNo = `${user.street} ${user.houseNo}`
	const zipCode = `Zip code - ${user.zip}`

	it('renders provided user data', () => {
		render(<UserDataCard user={user} />)

		expect(screen.getByText(user.city)).toBeInTheDocument()
		expect(screen.getByText(user.email)).toBeInTheDocument()
		expect(screen.getByText(user.fullName)).toBeInTheDocument()
		expect(screen.getByText(streetAndHouseNo)).toBeInTheDocument()
		expect(screen.getByText(zipCode)).toBeInTheDocument()
		expect(screen.getByLabelText(/edit/i)).toBeInTheDocument()
	})
})
