function pegaParametros() {
    const queryString = window.location.search
    return new URLSearchParams(queryString);
}
export const parametros = pegaParametros()