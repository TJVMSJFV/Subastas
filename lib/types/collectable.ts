/**
 * Tipo que representa los coleccionables
 * 
 * @property {string} id_collectable - Identificador del coleccionable
 * @property {string} name - Nombre del coleccionable
 * @property {string} description - Descripcion del coleccionable
 * @property {string} image - Imagen del coleccionable
 */

type Collectable = {
  idCollectable: string;
  name: string;
  description: string;
  imageSrc?: string; // Cambiar a tipo de imagen conveniente, lo mas probable es que sea un string indicando un url a una pagina web donde esten almacenadas las imagenes
};

export default Collectable;
