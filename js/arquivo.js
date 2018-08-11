function enviar(){
  // variavel js para avisar o usuario que a barra de contatos está indisponivel
  var nome = document.getElementById("text-nome");
  // se o valor na variavel nome for diferente de vazio
  if(nome.value != ""){
    //mostrar mensagem com nome
    alert("obrigado " + nome.value + ", mas esta área está em desenvolvimento");
  } else {
    //mostrar mensagem genérica
    alert("obrigado, mas esta área está em desenvolvimento");
  }

}
