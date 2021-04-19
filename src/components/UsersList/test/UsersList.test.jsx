import { render, screen } from '@testing-library/react'

import UsersList from '../UsersList'

describe('<UsersList />', () => {
	it('Shows info message when there are no active users', () => {
		render(<UsersList />)
		expect(screen.getByText(/there are no users yet/i)).toBeInTheDocument()
	})
})

// TODO need to test how user renders
// TODO test when editing user
