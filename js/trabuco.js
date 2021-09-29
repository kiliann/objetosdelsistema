import {Arma} from './arma.js'


export class Trabuco extends Arma {
  constructor(){
    super()
    this.cargador = 1
  }

  disparar(){
    console.log('PATAAA PUUUM');
  }
}
