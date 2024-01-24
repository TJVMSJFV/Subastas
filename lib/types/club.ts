/**
 * Tipo que representa un club
 * 
 * @property {string} id_club - Identificador del club
 * @property {string} name - Nombre del club
 * @property {Date} fundation_date - Fecha de fundacion del club
 * @property {string} phone_number - Numero de telefono del club
 * @property {string} email - Correo electronico del club
 * @property {string} web_page - Pagina web del club
 */

type Club = {
  idClub: string;
  name: string;
  fundationDate: Date;
  phoneNumber: string;
  email: string;
  webPage?: string;
};

export default Club;
