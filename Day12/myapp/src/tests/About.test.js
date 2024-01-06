import { render, screen } from '@testing-library/react';
import About from '../pages/About'

test('About_test_1', () => {
  render(<About />);
  const data1= screen.getByText(/Sritha T/i);
  expect(data1).toBeInTheDocument();
});
test('About_test_2', () => {
  render(<About />);
  const data2= screen.getByText(/727822TUCS235/i);
  expect(data2).toBeInTheDocument();
});
