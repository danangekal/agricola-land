import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeWrapper from '@/app/components/theme-wrapper';
import HomePage from '../page';
import Strings from '../strings';

const mockUsername = 'testusername';
const mockPassword = 'testpassword';
const mockAction = jest.fn();
const Component = <HomePage />;

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: mockAction,
    };
  },
}));

describe('Home Page Test', () => {
  it('Logo check', () => {
    render(Component, { wrapper: ThemeWrapper });

    const imgLogo = screen.getByRole('img', { name: Strings.alt_img_logo });

    expect(imgLogo).toBeTruthy();
  });

  it('Label username & password check', () => {
    render(Component, { wrapper: ThemeWrapper });

    const lblUsername = screen.getByRole('heading', {
      name: Strings.label_txtbox_username,
    });

    expect(lblUsername).toBeTruthy();

    const lblPassword = screen.getByRole('heading', {
      name: Strings.label_txtbox_password,
    });
    expect(lblPassword).toBeTruthy();
  });

  it('Simulate username check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputUsername = screen.getByPlaceholderText(
      Strings.placeholder_username,
    );

    expect(inputUsername).toBeEnabled();
    expect(inputUsername).toHaveDisplayValue('');

    userEvent.type(inputUsername, mockUsername);

    await waitFor(() => expect(inputUsername).toHaveDisplayValue(mockUsername));
  });

  it('Simulate password check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputPassword = screen.getByPlaceholderText(
      Strings.placeholder_password,
    );

    expect(inputPassword).toBeEnabled();
    expect(inputPassword).toHaveDisplayValue('');

    userEvent.type(inputPassword, mockPassword);

    await waitFor(() => expect(inputPassword).toHaveDisplayValue(mockPassword));
  });

  it('Simulate sign in proses check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputUsername = screen.getByPlaceholderText(
      Strings.placeholder_username,
    );

    expect(inputUsername).toBeEnabled();
    expect(inputUsername).toHaveDisplayValue('');

    userEvent.type(inputUsername, mockUsername);

    await waitFor(() => expect(inputUsername).toHaveDisplayValue(mockUsername));

    const btnSignIn = screen.getByRole('button', {
      name: Strings.label_btn_sign_in,
    });

    expect(btnSignIn).toBeEnabled();

    userEvent.click(btnSignIn);

    await waitFor(() =>
      expect(screen.findByText(Strings.msg_required)).toBeTruthy(),
    );

    const inputPassword = screen.getByPlaceholderText(
      Strings.placeholder_password,
    );

    expect(inputPassword).toBeEnabled();
    expect(inputPassword).toHaveDisplayValue('');

    userEvent.type(inputPassword, mockPassword);

    await waitFor(() => expect(inputPassword).toHaveDisplayValue(mockPassword));

    userEvent.click(btnSignIn);

    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(0));
  });
});
