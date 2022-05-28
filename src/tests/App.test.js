import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../app/App'

beforeEach(() => render(<App />))
afterEach(cleanup)

describe('App', () => {
  test('check header is rendered', () => {
    const header = screen.getByText(/Media Library/i)
    expect(header).toBeInTheDocument()
  })

  test('check if 404 page rendered when no items being searched', () => {
    const notFoundPage = screen.getByText(/No record found/i)
    expect(notFoundPage).toBeInTheDocument()
  })

  test('click on Search Item should focus on input field', () => {
    // search-box input field is being used here for query
    const searchField = screen.getByPlaceholderText(
      /Type and hit enter to search/i
    )
    const searchButton = screen.getByText(/Search Item/i)

    expect(searchField).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()

    // 404 component has reference to search box throught which
    // it can focus on field
    fireEvent.click(searchButton)
    expect(document.activeElement).toEqual(searchField)
  })
})
