console.group("Cuadrado");
/*
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
*/
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

console.group("Triangulo");
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
*/
function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
    let altura = 0;
    if (lado1 === lado2 && lado1 != base) {
        altura = Math.sqrt(lado1 ** 2 - ((base / 2) ** 2));
    }
    return altura;
}
console.groupEnd();

console.group("Circunferencia");
/*
const radioCfa = 4;
const diametroCfa = radioCfa * 2;
const PI = Math.PI;
const perimetroCfa = diametroCfa * PI;
const areaCfa = (radioCfa * radioCfa) * PI;
*/

function diametroCfa(radio) {
    return radio * 2;
}

function perimetroCfa(radio) {
    const diametro = diametroCfa(radio);
    return diametro * Math.PI;
}

function areaCfa(radio) {
    return radio * radio * Math.PI;
}

console.groupEnd();


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



function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTriangulo1");
    const lado2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputBaseTriangulo");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const valueBase = base.value;

    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = document.getElementById("InputTriangulo1");
    const lado2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputBaseTriangulo");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const valueBase = base.value;
    const altura = alturaTriangulo(value1, value2, valueBase);

    const area = areaTriangulo(valueBase, altura);
    alert(area);
}

function calcularPerimetroCfa() {
    const radio = document.getElementById("InputRadio");
    const value = parseFloat(radio.value);
    const perimetro = perimetroCfa(value);
    alert(perimetro);
}

function calcularAreaCfa() {
    const radio = document.getElementById("InputRadio");
    const value = parseFloat(radio.value);
    const area = areaCfa(value);
    alert(area);
}