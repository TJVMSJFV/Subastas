import AuctionState from "@/lib/enums/auction-state";

/**
 * Interfaz que representa una subasta
 * @property {string} id_auction - Identificador de la subasta
 * @property {Date} init_date - Fecha de inicio de la subasta
 * @property {Date} end_date - Fecha de finalizacion de la subasta
 * @property {string} type - Tipo de subasta
 * @property {AuctionState} state - Estado de la subasta
 */

type Auction = {
  idAuction: string;
  initDate: Date;
  endDate: Date;
  type: string; // Cambiar a enum
  state: AuctionState;
};

export default Auction;
