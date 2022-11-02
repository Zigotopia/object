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

let relatorio = ""

for( let info in cliente){
    if(typeof cliente[info]=== "string " || typeof cliente[info]=== "number"){
        relatorio +=  `
        ${info} : ${cliente[info]}
        ` 
    }
    
}

console.log(relatorio)