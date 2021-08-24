function calcularModa(lista) {
    const listaObj = {};
    lista.map(
        function(elemento) {
            if (listaObj[elemento]) {
                listaObj[elemento] += 1;
            } else {
                listaObj[elemento] = 1;
            }
        }
    );

    const listaArr = Object.entries(listaObj).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    );

    return listaArr[listaArr.length - 1][0];
}