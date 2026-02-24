export const dropboxlinks = (url) => {
  if (!url) return "";
  return url
    .replace("?dl=0", "?raw=1")
    .replace("&dl=0", "&raw=1");
};