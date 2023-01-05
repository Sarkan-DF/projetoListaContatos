let listaContatos = []

function criaUsuario() {
    console.clear();

    const usuario = {}

    let id = Math.floor((Math.random() * 1004.75) + 7)
    usuario.id = id
    
    let nomeUsuario = prompt("Digite um nome: ")
    usuario.nome = nomeUsuario
    
    let telefoneUsuario = prompt("Digite um telefone: ")
    usuario.telefone = telefoneUsuario
    
    const validaTelefone = listaContatos.some((valor, indice, array) => telefoneUsuario === valor.telefone)

    if(validaTelefone){
        alert("Numero de telefone já cadastrado!")
        return
    }

    listaContatos.push(usuario)
    mostraLista();
}

function mostraLista() {
    console.clear();
    for (const dado of listaContatos) {
        console.log(`Id: ${dado.id}, Nome: ${dado.nome}, Telefone: ${dado.telefone} \n`)
    }
}

function alteraUsuario() {
     const idAltera = Number(prompt("Digite o id da usuaria que deseja alterar: "))
     const validaId = listaContatos.some((valor, indice, array) => idAltera === valor.id )
     if(validaId) {
        const alteraNome = prompt("Digite o novo nome: ")
        const alteraTelefone = prompt("Digite o novo telefone: ")
        const indiceUsuario = listaContatos.find((valor, indice, array) => idAltera === valor.id)
        indiceUsuario.nome = alteraNome
        indiceUsuario.telefone = alteraTelefone
    }
    mostraLista();
}

function deletaUsuario() {
    const idApagar = Number(prompt("Digite o id do usuario que deseja apagar: "))
    const validaId = listaContatos.some((valor, indice, array) => idApagar === valor.id )
    if (validaId){
        const indiceApagar = listaContatos.findIndex((valor, indice, array) => idApagar === valor.id )
        listaContatos.splice(indiceApagar,1)
        mostraLista();
    }else {
        return alert("Item não existente!")
    }
}