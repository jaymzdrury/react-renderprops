import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

test('toggle toggles', () => {
  const {getByText} = render(<App />);
  expect(getByText(/ON/i)).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('toggle'))
  expect(getByText(/OFF/i)).toBeInTheDocument();
});