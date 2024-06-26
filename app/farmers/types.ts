export interface FarmerDto {
  /**
   * the name of the farmer
   */
  name: string;

  /**
   * The identification card number of the farmer
   */
  idCardNumber: string;

  /**
   * The birthdate of the farmer
   */
  birthDate: any;
}

export interface Farmer extends FarmerDto {
  /**
   * The unique identifier for the farmer
   */
  id: number;
}

export type TypeActionFarmer = 'add' | 'edit' | 'detail' | 'delete';
