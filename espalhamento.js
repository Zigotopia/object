const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
      dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
       }],
    }
   ]

    let listaDeDepententes = []

   for( let info in clientes){
   
   listaDeDepententes.push(...clientes[info].dependentes)
}
   




      console.log(listaDeDepententes)