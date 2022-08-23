/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre: ")
  datosPersona.edad = 2022 - parseInt(prompt("Ingresa tu año de nacimiento"))
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives: ")
  datosPersona.interesPorJs = confirm(" te interesa aprender Javascript (Aceptar: SI, Cancelar: NO)?: ")

  if(datosPersona.interesPorJs){
    datosPersona.interesPorJs = "SI"

  }
  else{
    datosPersona.interesPorJs = "NO"
  }

 
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.getElementById('nombre')
  const nombreUsuario = datosPersona.nombre;
  nombre.innerHTML += nombreUsuario;

  const edad = document.getElementById('edad')
  const edadUsuario = datosPersona.edad
  edad.innerHTML += edadUsuario;

  const ciudad = document.getElementById('ciudad')
  //const ciudadUsuario = datosPersona.ciudad
  ciudad.innerHTML += datosPersona.ciudad;

  const interes = document.getElementById('javascript')
  interes.innerHTML += datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */


  for(var tarjeta of listado){


  
  }
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 

let sitio = document.getElementById('sitio')

if(sitio.classList.contains("dark")){
  sitio.classList.remove('dark')

}
else{
  sitio.classList.add('dark')

}

}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener('keypress',function(e){

  let sobreMi = document.getElementById('sobre-mi')

  if(e.key == 'f' && sobreMi.classList.contains("oculto")){
    sobreMi.classList.remove('oculto')
  }
  


})



