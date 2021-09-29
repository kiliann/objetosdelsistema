import {Arma} from './arma.js'

export class M16 extends Arma {
  constructor(){
    super();
    this.cargador = Number.POSITIVE_INFINITY
  }

  disparar(){
    console.log('¡TA-TA-TA-TA-TA-TA!');
  }
}
