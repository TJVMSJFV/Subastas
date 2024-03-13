/**
 * Tipo que representa un participante
 * 
 * @property {string} idParticipant - Identificador del participante
 * @property {boolean} authorized - Indica si el participante esta autorizado
 */

type Participant = {
  idParticipant: string;
  authorized?: boolean;
};

export default Participant;
