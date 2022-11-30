import {fireEvent, render} from '@testing-library/react'
import App from '../App'

it('amount subtracts', () => {
    const {getByText, getByTestId} = render(<App />)
    fireEvent.click(getByTestId('amount-subtract'))
    expect(getByText('-1')).toBeInTheDocument()
})

it('amount adds', () => {
    const {getByText, getByTestId} = render(<App />)
    fireEvent.click(getByTestId('amount-add'))
    fireEvent.click(getByTestId('amount-add'))
    expect(getByText('2')).toBeInTheDocument()
})