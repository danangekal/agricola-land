import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeWrapper from '@/app/components/theme-wrapper';
import Strings from '@/app/farmers/strings';
import FarmerAddPage from '../page';

const mockName = 'TestName';
const mockIdCardNumber = '123456789';
const mockBirthDate = '06 June 1988';
const mockAction = jest.fn();
const Component = <FarmerAddPage />;

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: mockAction,
    };
  },
}));

describe('Farmer Add Page Test', () => {
  it('Label name, idCardNumber & birthDate check', () => {
    render(Component, { wrapper: ThemeWrapper });

    const lblName = screen.getByRole('heading', {
      name: Strings.label_col_name,
    });

    expect(lblName).toBeTruthy();

    const lblIdNumber = screen.getByRole('heading', {
      name: Strings.label_col_id_number,
    });

    expect(lblIdNumber).toBeTruthy();

    const lblBirthDate = screen.getByRole('heading', {
      name: Strings.label_col_birthdate,
    });

    expect(lblBirthDate).toBeTruthy();
  });

  it('Simulate name check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputName = screen.getByPlaceholderText(Strings.placeholder_name);

    expect(inputName).toBeEnabled();
    expect(inputName).toHaveDisplayValue('');

    userEvent.type(inputName, mockName);

    await waitFor(() => expect(inputName).toHaveDisplayValue(mockName));
  });

  it('Simulate idCardNumber check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputIdCardNumber = screen.getByPlaceholderText(
      Strings.placeholder_id_number,
    );

    expect(inputIdCardNumber).toBeEnabled();
    expect(inputIdCardNumber).toHaveDisplayValue('');

    userEvent.type(inputIdCardNumber, mockIdCardNumber);

    await waitFor(() =>
      expect(inputIdCardNumber).toHaveDisplayValue(mockIdCardNumber),
    );
  });

  it('Simulate birthDate check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputBirthDate = screen.getByPlaceholderText(
      Strings.placeholder_birthdate,
    );

    expect(inputBirthDate).toBeEnabled();
    expect(inputBirthDate).toHaveDisplayValue('DD MMMM YYYY');

    userEvent.type(inputBirthDate, mockBirthDate);

    await waitFor(() =>
      expect(inputBirthDate).toHaveDisplayValue(mockBirthDate),
    );
  });

  it('Simulate form add process check', async () => {
    render(Component, { wrapper: ThemeWrapper });

    const inputName = screen.getByPlaceholderText(Strings.placeholder_name);

    expect(inputName).toBeEnabled();
    expect(inputName).toHaveDisplayValue('');

    userEvent.type(inputName, mockName);

    await waitFor(() => expect(inputName).toHaveDisplayValue(mockName));

    const inputIdCardNumber = screen.getByPlaceholderText(
      Strings.placeholder_id_number,
    );

    expect(inputIdCardNumber).toBeEnabled();
    expect(inputIdCardNumber).toHaveDisplayValue('');

    userEvent.type(inputIdCardNumber, mockIdCardNumber);

    await waitFor(() =>
      expect(inputIdCardNumber).toHaveDisplayValue(mockIdCardNumber),
    );

    const btnAdd = screen.getByRole('button', {
      name: Strings.label_btn_add,
    });

    expect(btnAdd).toBeEnabled();

    userEvent.click(btnAdd);

    await waitFor(() => expect(screen.getByRole('dialog')).toBeTruthy());

    const titleDialog = screen.getByRole('heading', {
      name: Strings.title_modal_add,
    });

    expect(titleDialog).toBeTruthy();

    const contentDialog = screen.findByText(Strings.msg_modal_add);

    expect(contentDialog).toBeTruthy();

    const btnSubmit = screen.getByRole('button', {
      name: Strings.label_btn_yes_add_modal,
    });

    expect(btnSubmit).toBeEnabled();

    userEvent.click(btnSubmit);

    await waitFor(() =>
      expect(screen.findByText(Strings.msg_required)).toBeTruthy(),
    );

    const inputBirthDate = screen.getByPlaceholderText(
      Strings.placeholder_birthdate,
    );

    expect(inputBirthDate).toBeEnabled();
    expect(inputBirthDate).toHaveDisplayValue('DD MMMM YYYY');

    userEvent.type(inputBirthDate, mockBirthDate);

    await waitFor(() =>
      expect(inputBirthDate).toHaveDisplayValue(mockBirthDate),
    );

    userEvent.click(btnAdd);

    await waitFor(() => expect(screen.getByRole('dialog')).toBeTruthy());

    userEvent.click(btnSubmit);

    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(0));
  });
});
