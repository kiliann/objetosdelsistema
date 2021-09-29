'use strict'

console.log('Cargado JS');

let fecha = new Date()

console.log(fecha);

let fecha2 = new Date(2021, 8, 29)

console.log(fecha2);
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'dicciembre']
const semana = ['domingo', 'lunes', 'marte', 'miércoles', 'jueves', 'viernes', 'sabado']
let hoy = `Hoy es ${semana[fecha.getDay()]} del mes ${meses[fecha.getMonth()+1]}`

console.log(hoy);


let ms1 = fecha.getTime()

console.log('Desde los Beatles ha pasado' + ms1 + ' ms');


let dentro5dias = ms1 + 5*24*60*60*1000
//5dias, 24 horas al dia, 60 minuntos, 60 segundos en cada minunto, 1000 milisegudos por
//cada segundos

dentro5dias = new Date(dentro5dias)
console.log(dentro5dias)

let texto = 'en un lugar de La Mancha, de cuyo nombre no quiero...'
console.log(texto.charAt(6))
console.log(texto.indexOf('1'));
//busca la poscion de la primer e despues de la coma
console.log(texto.indexOf('e',texto.indexOf(',')));
console.log(texto.includes('La Macha'));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.substr(4,2));


//Partes Matematicas

console.log(Math.floor(Math.PI));

let entrada = '43zapato'
console.log(Number.isNaN(entrada));
console.log(Number.parseInt(entrada));

entrada = ' 3.1415PiñaColada'
console.log(Number.parseFloat(entrada));

//Listas: Conjunto ordenado con elementos repetidos

//Conjunto: NO tiene orden ni repeticion

//Mapa: Estructura Clave valor


//Cojuntos - Set
class Amigos {}
let amigos = new Set()

const ana = new Amigos()
const juan = new Amigos()
const draco = new Amigos()
amigos.add('Ana')
amigos.add('Juan')
amigos.add('Conde Draco')

console.log(amigos.size);


for(let amigo of amigos)
  console.log(amigo);


amigos = []

amigos.push(ana)
amigos.push(juan)
amigos.push(draco)
amigos.push(draco)

for (let i = 0; i < amigos.length; i++) {
  console.log(amigos[i]);
}

//Mapas
let coches = Map()

coches.set('BA-9282-ZT', 'Porsche')
coches.set('TO-666-JO', 'Seat Ibiza')
