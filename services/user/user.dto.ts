export type registerUserDto = {
  docId: string;
  firstName: string;
  middleName?: string;
  firstLastName: string;
  middleLastName?: string;
  email: string;
  password: string;
  gender: 'M' | 'F';
  birthDate: Date;
  phoneNumber: string;
};
