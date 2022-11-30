import {fireEvent, render} from '@testing-library/react'
import App from '../App'

it('counter updates onClick', () => {
    const {getByText, getByTestId} = render(<App />)
    fireEvent.click(getByTestId('counter'))
    expect(getByText('2')).toBeInTheDocument()
})