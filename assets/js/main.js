// inicialización de variables globales >---
var navegador = document.getElementById("navegador");
var formTelefono = document.getElementById("formTelefono");
var formularioOculto = document.getElementById("formularioOculto");
var inputs = formularioOculto.getElementsByTagName("input");
// fin sección variables globales --->

// inicio funcionalidad NAVEGADOR --->
document.addEventListener("scroll", cambiarFondoNavegador);
  function cambiarFondoNavegador(){
    if (window.scrollY > 90) {
      navegador.style.backgroundColor = "white";
    }else if (window.scrollY < 90) {
      navegador.style.backgroundColor = "transparent";
    }
  }
// fin funcionalidad NAVEGADOR --->

// inicio funcionalidad FORMULARIO >---
  formularioOculto.style.display = "none"
  formTelefono.addEventListener("click", mostrarFormulario);
  formTelefono.addEventListener("mouseover",iniciaInputs);
  formTelefono.addEventListener("mouseout", placeholders);


  for(var i = 0 ;i<inputs.length;i++){
      inputs[i].addEventListener("mouseover", iniciaInputs);
      inputs[i].placeholder=inputs[i].name;
      inputs[i].addEventListener("mouseout", placeholders);

  }
  function mostrarFormulario() {
    formularioOculto.style.display = "inline-block";
    this.placeholder=this.name;
  }

  function iniciaInputs(){
    this.placeholder="";
  }
  function placeholders(){
    this.placeholder=this.name;
  }

// fin funcionalidad FORMULARIO --->


// inicio funcionalidad IMAGEN-VIDEO >---

// fin funcionalidad IMAGEN-VIDEO --->
