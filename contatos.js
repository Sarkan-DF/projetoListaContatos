
function salvarLocalStorage() {
    localStorage.setItem("contatos", JSON.stringify(getStorage));
}

const getStorage = JSON.parse(localStorage.getItem("contatos")) || [{ id: 99, nome: "moises", telefone: "9000" },];

console.log(getStorage);

function criaUsuario() {
    console.clear();

    const usuario = {}

    let id = Math.floor((Math.random() * 1004.75) + 7)
    usuario.id = id
    
    let nomeUsuario = prompt("Digite um nome: ")
    usuario.nome = nomeUsuario
    
    let telefoneUsuario = prompt("Digite um telefone: ")
    usuario.telefone = telefoneUsuario
    
    const validaTelefone = getStorage.some((valor, indice, array) => telefoneUsuario === valor.telefone)

    if(validaTelefone){
        alert("Numero de telefone já cadastrado!")
        return
    }

    getStorage.push(usuario)
    salvarLocalStorage();
    mostraLista();
}

function mostraLista() {
    const divShow = document.getElementById("conteiner")
    divShow.innerText = ""

    getStorage.map((usuario) => {
        divShow.innerHTML += `<br>Nome: ${usuario.nome} - Telefone: ${usuario.telefone} - Id: ${usuario.id} <br>`
    })
}

function alteraUsuario() {
     const idAltera = Number(prompt("Digite o id da usuaria que deseja alterar: "))
     const validaId = getStorage.some((valor, indice, array) => idAltera === valor.id )
     if(validaId) {
        const alteraNome = prompt("Digite o novo nome: ")
        const alteraTelefone = prompt("Digite o novo telefone: ")
        const indiceUsuario = getStorage.find((valor, indice, array) => idAltera === valor.id)
        indiceUsuario.nome = alteraNome
        indiceUsuario.telefone = alteraTelefone
    }
    salvarLocalStorage();
    mostraLista();
}

function deletaUsuario() {
    const idApagar = Number(prompt("Digite o id do usuario que deseja apagar: "))
    const validaId = getStorage.some((valor, indice, array) => idApagar === valor.id )
    if (validaId){
        const indiceApagar = getStorage.findIndex((valor, indice, array) => idApagar === valor.id )
        getStorage.splice(indiceApagar,1)
        salvarLocalStorage();
    }else {
        return alert("Item não existente!")
    }
    mostraLista();
}