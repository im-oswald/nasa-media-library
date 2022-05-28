import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchResults from '../app/components/search-results'
import { list, load, startYear } from '../../__mocks__/dataMock'
import {
  selectedPageClassList,
  nonSelectedPageClassList,
} from '../app/constants/pagination-config'

afterEach(cleanup)

describe('SearchResults', () => {
  test('check results are showing up', () => {
    render(<SearchResults list={list} load={load} />)

    // any section from results page could be tested here
    const resultsText = screen.getByText(/Showing result\(s\) for "man"/i)
    expect(resultsText).toBeInTheDocument()
  })

  test('check pagination buttons are showing up with proper classes', () => {
    render(<SearchResults list={list} load={load} />)

    const nextButton = screen.getByText(/Next/i)
    expect(nextButton).toBeInTheDocument()

    const previousButton = screen.getByText(/Previous/i)
    expect(previousButton).toBeInTheDocument()

    const currentPage = screen.getByText('1')
    expect(currentPage).toBeInTheDocument()

    // check if current page is having correct class
    expect(currentPage).toHaveClass(selectedPageClassList)

    const anyOtherPage = screen.getByText('2')
    expect(anyOtherPage).toBeInTheDocument()

    // check if other pages are having correct class
    expect(anyOtherPage).toHaveClass(nonSelectedPageClassList)
  })

  test('hide next/previous buttons when filters are there', () => {
    // startYear filter is applied here
    render(<SearchResults list={list} load={load} startYear={startYear} />)

    expect(screen.queryByText(/Next/i)).toBeNull()
    expect(screen.queryByText(/Previous/i)).toBeNull()
  })
})
