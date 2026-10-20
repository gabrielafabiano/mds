function irParaSite(elemento) {
    var url = elemento.value; // Pega o valor da opção selecionada
    
    if (url !== "") {
        window.location.href = url; // Redireciona o navegador para a página
    }
}