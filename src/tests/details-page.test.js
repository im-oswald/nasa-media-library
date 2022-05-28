import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Details from '../app/components/details'
import { item } from '../../__mocks__/dataMock'

afterEach(cleanup)

describe('Details', () => {
  test('check details are showing up', () => {
    render(<Details item={item} />)

    // any section from details page could be tested here
    const backButton = screen.getByText(/Go back to results page/i)
    expect(backButton).toBeInTheDocument()

    // check if details page is showing location
    const location = screen.getByText(item.location)
    expect(location).toBeInTheDocument()

    // check if details page is showing photographer
    const photographer = screen.getByText(item.photographer)
    expect(photographer).toBeInTheDocument()

    // check if details page is showing keywords
    const keyword = screen.getByText(item.keywords[0])
    expect(keyword).toBeInTheDocument()

    //check if details page is showing date_created
    const date_created = screen.getByText(/ago/i)
    expect(date_created).toBeInTheDocument()
  })

  test('page should not render location in case of not being available in item', () => {
    // delete the location key and check if it is being rendered
    const locationLessItem = item
    delete locationLessItem.location

    render(<Details item={locationLessItem} />)

    const location = screen.queryByAltText(/location/i)
    expect(location).toBeNull()
  })

  test('page should not render photographer in case of not being available in item', () => {
    // delete the photographer key and check if it is being rendered
    const photographerLessItem = item
    delete photographerLessItem.photographer

    render(<Details item={photographerLessItem} />)

    const photographer = screen.queryByAltText(/photgrapher/i)
    expect(photographer).toBeNull()
  })
})
