function cadastrar() {

    let nome = document.getElementById("nome").value;

    if (nome == "") {

        alert("Digite seu nome!");

    } else {

        document.getElementById("resultado").innerHTML =
            "Bem-vindo, " + nome + "!";

    }
}