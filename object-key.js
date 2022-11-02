const cliente = {
    nome: "LUIZ FELIPE",
    cpf: "14463654722",
    idade: 16,
    tel: ["225253273", "99558765"],
    dependente: [{
        nome: "Sara Silva",
        parentesco: "filha",
        nascimento: "20/03/2011"
    }, {
        nome: "Matheus Malavasi",
        parentesco: "Primo",
        nascimento: "20/04/2004"

    }],
    saldo: 200,
    depositar: function(valor){
        this.saldo += valor
    }


}

function proposta(obj){
    const propCliente = Object.keys(cliente)
    if (propCliente.includes("dependente")){
      console.log(`${obj.nome}, voce foi selecionado para nossa promoção `)
    }
}
proposta(cliente)