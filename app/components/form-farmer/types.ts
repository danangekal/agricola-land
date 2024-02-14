import { FarmerDto, TypeActionFarmer } from '@/app/farmers/types';

export interface FormFarmerProps {
  /**
   * The type of form farmer
   */
  type: TypeActionFarmer;
  /**
   * The initial values of form
   */
  initialValues?: FarmerDto;
  /**
   * The values of form
   */
  values?: FarmerDto;
  /**
   * The loading values of form
   */
  loading?: boolean;
  /**
   * The action of submit form
   */
  handleOnSubmitForm: (values: FarmerDto) => void;
}
