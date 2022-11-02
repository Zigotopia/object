const cliente = {
    nome:"LUIZ FELIPE",
    cpf:"14463654722",
    idade: 16,
    tel: "225253273"


}

const chaves =["nome", "cpf", "idade", "tel"]

console.log(cliente[chaves[1]])

chaves.forEach(elemento => { console.log(cliente[elemento])
    
});