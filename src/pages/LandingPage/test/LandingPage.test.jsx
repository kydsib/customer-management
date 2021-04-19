import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LandingPage from '../LandingPage'

it('Pressing button toggles betwen userForm and userList pages, shows message when there are no users', () => {
	render(<LandingPage />)

	const showListBtn = screen.getByText(/show list/i)

	expect(showListBtn).toBeInTheDocument()
	userEvent.click(showListBtn)

	const enterUserBtn = screen.getByText(/enter new user/i)

	expect(enterUserBtn).toBeInTheDocument()
	expect(screen.getByText(/there are no users yet/i)).toBeInTheDocument()

	userEvent.click(enterUserBtn)
	expect(showListBtn).toBeInTheDocument()
})
