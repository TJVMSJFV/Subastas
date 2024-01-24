/**
 * Enumerado que representa los estados de una subasta
 *
 * @property {string} ACTIVE - Subasta activa
 * @property {string} IN_PROGRESS - Subasta en progreso
 * @property {string} FINISHED - Subasta finalizada
 * @property {string} CANCELLED - Subasta cancelada
 */
enum AuctionState {
  ACTIVE = "ACTIVE",
  IN_PROGRESS = "IN PROGRESS",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
  // Si se quieren agregar mas estados seria aqui
}

export default AuctionState;
