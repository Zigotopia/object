function cliente(nome,cpf,tel,saldo){
    this.nome = nome,
    this.cpf= cpf,
    this.tel = tel,
    this.saldo = saldo,
    this.depositar = valor => this.saldo += valor
}

let Juliana = new cliente("Juliana", "144.555.999.2", "92342342342", 100)

Juliana.depositar(200)


function clientePoup(nome,cpf,tel,saldo,saldoPup){
    cliente.call(this,nome,cpf,tel,saldo),
    this.saldoPup = saldoPup,
    this.depositarSaldoPoup = valor => saldoPup += valor
}

let felipe = new clientePoup("felipe","144321312312","995634423",100, 200)

console.log(felipe)

