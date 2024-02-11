import type { IFarmerDto } from '@/app/farmers/types';

export type TFormFarmer = 'add' | 'edit' | 'detail';

export interface IFormFarmer {
  /**
   * The type of form farmer
   */
  type: TFormFarmer;
  /**
   * The initial values of form
   */
  initialValues: IFarmerDto;
  /**
   * The action of submit form
   */
  handleOnSubmitForm: (values: IFarmerDto) => void;
}
