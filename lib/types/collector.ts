import Gender  from "@/lib/enums/gender";

/**
  * Tipo que representa un Coleccionista
  * 
  * @property {number} docId - Identificador del coleccionista
  * @property {string} fName - Nombre del coleccionista
  * @property {string} mName - Segundo nombre del coleccionista
  * @property {string} fLastName - Primer apellido del coleccionista
  * @property {string} sLastName - Segundo apellido del coleccionista
  * @property {Gender} gender - Genero del coleccionista
  * @property {Date} birthDate - Fecha de nacimiento del coleccionista
  * @property {string} phoneNumber - Numero de telefono del coleccionista
 */

type Collector = {
  docId: number;
  fName: string;
  mName?: string;
  fLastName: string;
  sLastName: string;
  gender: Gender;
  birthDate: Date;
  phoneNumber: string;
  // TODO: Agregar la parte de la cuenta
};

export default Collector;

