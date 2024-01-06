import { render, screen,fireEvent } from '@testing-library/react';
import Counter from '../Components/Counter'

test('About_test_1', () => {
  render(<Counter />);
  const countele= screen.getByText(/0/);
  expect(countele).toBeInTheDocument();
});
test('About_test_Increment', () => {
  render(<Counter />);
  const inc= screen.getByText('+');
  const countele= screen.getByText(/0/);
  fireEvent.click(inc)
  expect(countele).toHaveTextContent('1');
});
test('About_test_Decrement', () => {
  render(<Counter />);
  const dec= screen.getByText('-');
  const countele= screen.getByText(/0/);
  fireEvent/click(dec)
  expect(countele).toHaveTextContent('-1');
});
