import { render } from '@testing-library/react';

import Button from '../index';

it('Button component unchanged', () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
