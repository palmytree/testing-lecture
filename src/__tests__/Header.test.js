import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

it('Does not show dropdown menu when mounted', () => {
  const { queryByTestId } = render(<Header />),
    dropdown = queryByTestId('dropdown')

  expect(dropdown).not.toBeTruthy()
})

it('Shows dropdown when hamburger is clicked', () => {
  const { getByTestId, container } = render(<Header />),
    hamburger = getByTestId('hamburger-button')

  //getByTestId returns error if nothing is found

  fireEvent.click(hamburger)

  expect(container.textContent).toContain('Dropdown menu')
})
