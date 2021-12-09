//Aqui se calcula la mediana general
const salarioCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salarioCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Funciones helpers o utils
function esPar(numero) {
    return (numero % 2 === 0);

    }

    function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad]; 

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad; 

    }
}


//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

//Llamando funciones
const medianaTop10Col = medianaSalarios(salariosColTop10);
const medianaGeneralCol = medianaSalarios(salariosColSorted);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});