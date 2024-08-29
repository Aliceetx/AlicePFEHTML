function validarFomulario() {
    var nome = document.getElementById("nome").value;
    var mensagemErro = document.getElementById("menagemErro");

    if (nome === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo de nome.";
        return false;
    }
   
    return true;
    
    }
