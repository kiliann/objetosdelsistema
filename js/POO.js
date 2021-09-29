'use strict'

import {Persona} from './persona.js'
import {Arma} from './arma.js'
import {Trabuco} from './trabuco.js'
import {M16} from './m16.js'

class App{
  constructor(){
    window.onload = this.iniciar.bind(this)
  }
  iniciar(){
    let p1 = new Persona('Ana')
    let p2 = new Persona('Blas')
    p1.arma = new Trabuco()
    p1.arma.disparar()
    p2.m16 = new M16()
    p2.m16.disparar()
    console.log(Arma.numArmas);
    Arma.getNumArma()



    //-----------------------------------------------------------------


    let a1 = new Trabuco()
    let a2 = new M16()
    let a3 = new Trabuco()
    let a4 = new Persona()
  }
}

new App()
