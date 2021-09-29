export class Arma {
  constructor() {
    this.cargador = 6
    this.balas = 0
    Arma.numArmas++
  }
  cargar(balas){
    this.balas += balas
    if (this.balas > this.cargador) {
      this.balas = this.cargador

    }
  }
  disparar(){
    console.log('PUUUM');
  }
  static getNumArma(){
    console.log(`Hay ${Arma.numArmas} armas ahora.`);
    document.write(`Hay ${Arma.numArmas} armas ahora.`)
  }
}
Arma.numArmas = 0;
