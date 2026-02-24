export const formatPrecio = (valor, divisa = "ARS") => {
    return `${Number(valor).toLocaleString("es-Ar")} ${divisa}`;
}