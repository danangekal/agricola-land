import { Farmer, FarmerDto } from '@/app/farmers/types';

export type FormFarmer = 'add' | 'edit' | 'detail';

export interface FormFarmerProps {
  /**
   * The type of form farmer
   */
  type: FormFarmer;
  /**
   * The initial values of form
   */
  initialValues?: Farmer;
  /**
   * The values of form
   */
  values?: Farmer;
  /**
   * The loading values of form
   */
  loading?: boolean;
  /**
   * The action of submit form
   */
  handleOnSubmitForm: (values: FarmerDto) => void;
}
