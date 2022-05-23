import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../app/App'

test('check first div text', () => {
  render(<App />)
  const linkElement = screen.getByText(/Media Library/i)
  expect(linkElement).toBeInTheDocument()
})
