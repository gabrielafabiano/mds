function irParaSite() {
  var select = document.getElementById("meuMenu");
  var url = select.value;
  
  if (url) {
    window.open(url, "_blank"); 
  }
}
