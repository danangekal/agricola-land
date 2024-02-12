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
   * The birthdate of the farmer in the format YYYY-MM-DD
   */
  birthDate: string;
}

export interface Farmer extends FarmerDto {
  /**
   * The unique identifier for the farmer
   */
  id: number;
}
