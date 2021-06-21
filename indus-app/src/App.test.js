import { render } from '@testing-library/react';
import App from './App';
import { CompanyName } from './Components/Constants';
import Header from './Components/Header'

test('renders learn react link', () => {
  const app = render(<Header/>, <App />);
  expect(app.getByText(CompanyName)).toBeInTheDocument()
});
