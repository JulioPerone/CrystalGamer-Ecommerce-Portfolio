// dropboxlinks.js
// Funcion auxiliar que permite transformar los links de dropbox 
// en links directos para las imágenes, en vez de vista previas.

export const dropboxlinks = (url) => {
  if (!url) return "";
  return url
    .replace("?dl=0", "?raw=1")
    .replace("&dl=0", "&raw=1");
};