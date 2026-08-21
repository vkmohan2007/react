import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

function renderApp(route) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  )
}

describe('App', () => {
  it('renders the header and footer', () => {
    renderApp('/')

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders the list page at /', () => {
    renderApp('/')

    expect(
      screen.getByText('delectus aut autem')
    ).toBeInTheDocument()
  })

  it('renders a not found message for unknown routes', () => {
    renderApp('/unknown-route')

    expect(screen.getByText('Route Not Found')).toBeInTheDocument()
  })
})
