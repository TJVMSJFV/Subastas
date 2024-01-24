/**
 * Catalogo de coleccionables
 * 
 * @property {string} id_catalog - Identificador del catalogo
 * @property {number} base_price - Precio base del catalogo
 * @property {number} min_bid_duration - Duracion minima de una puja
 * @property {number} order - Orden del catalogo
 * @property {number} reached_price - Precio alcanzado por el catalogo
 */

type Catalog = {
  idCatalog: string;
  basePrice: number;
  minBidDuration?: number;
  order?: number;
  reachedPrice?: number;
};

export default Catalog;
