class Cliente{
    constructor(nome,email,tel,saldo){
        this.nome = nome
        this.email = email
        this.tel = tel
        this.saldo =saldo

    }
    depositar = valor => this.saldo += valor
} 



class ClientePoupança extends Cliente{
    constructor(nome,email,tel,saldo, saldoPoupança){
    super(nome,email,tel,saldo)
    this.saldoPoupança = saldoPoupança}

    depositarPoupança = valor => this.saldoPoupança += valor




}

let isabela = new ClientePoupança("Isabela", "isabela@email.com", "225352632",100, 300)

isabela.depositarPoupança(1000)

console.log(isabela)