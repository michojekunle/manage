import { render, screen } from '@testing-library/react'
import Home from '../src/app/[locale]/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /manage/i,
    })

    expect(heading).toBeInTheDocument()
  })
})