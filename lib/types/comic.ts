/**
 * Tipo que representa un comic
 *
 * @property {string} idComic - Identificador del comic
 * @property {string} editorial - Editorial del comic
 * @property {string} title - Titulo del comic
 * @property {number} number - Numero del comic
 * @property {number} volume - Volumen del comic
 * @property {Date} publicationDate - Fecha de publicacion del comic
 * @property {boolean} color - Indica si el comic es a color
 * @property {number} numPages - Numero de paginas del comic
 * @property {string} synopsis - Sinopsis del comic
 */

type Comic = {
  idComic: string;
  editorial: string;
  title: string;
  number: number;
  volume?: number;
  publicationDate: Date;
  color: boolean;
  numPages: number;
  synopsis: string;
};

export default Comic;
