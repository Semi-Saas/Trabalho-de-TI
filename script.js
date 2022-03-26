class Moedas {
  dolar;
  real;
  
  constructor() {
    this.dolar = 4.74
  }
  
  converterRealDolar() {
    this.real = document.getElementById("real").value
    
    console.log(this.real)
    const valorEmDolar = parseFloat(this.real) / this.dolar;
    
    document.getElementById("resultado").innerText = valorEmDolar;
  }
}

const moeda = new Moedas();

