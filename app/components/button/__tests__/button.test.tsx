import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeWrapper from '@/app/components/theme-wrapper';
import Button from '../index';

const mockAction = jest.fn();
const Component = <Button onClick={mockAction}>Tes</Button>;

describe('Button component test', () => {
  it('Button default check', () => {
    render(Component, { wrapper: ThemeWrapper });

    const button = screen.getByRole('button', {
      name: 'Tes',
    });

    expect(button).toBeTruthy();
  });

  it('Button click check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const button = screen.getByRole('button', {
      name: 'Tes',
    });

    expect(button).toBeTruthy();

    userEvent.click(button);

    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(1));
  });
});
