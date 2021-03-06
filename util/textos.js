export function tituloPublicacion(slug) {
  return slug
    .split("-")
    .map(texto => texto.toUpperCase())
    .join(" ");
}
