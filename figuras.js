// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return  lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

const PI = Math.PI;
const alCuadrado = Math.pow;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

function areaCirculo(alCuadrado) {
    return alCuadrado ** 2;
}

function areaCirculo2(alCuadrado) {
    return areaCirculo(alCuadrado) * PI;

}

function perimetroCirculo2(diametro) {
    return diametro * PI;
}

console.groupEnd();

//Interactuando con HTML (Cuadrado)
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Interactuando con HTML (Circulo)
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo2(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo2(value);
    alert(area);
}

//Triangulo altura
function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('no lo se')
    }
}

function calcularAlturaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const alturaT = altura(value);
    alert(alturaT);
}
