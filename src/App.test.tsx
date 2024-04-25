import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders App component', () => {
  render(<App />)
  // const appElement = screen.getByText(/Hello world!/i)
  // expect(appElement).toBeInTheDocument()
})
