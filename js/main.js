import Base from "./clases/base.js"
import Ruta from "./clases/ruta.js"

var Nbases = document.querySelector("#Nbases")
var MiBases = document.querySelector("#MiBases")


var btnAgregar = document.querySelector("#btnAgregar")
var btnBuscar = document.querySelector("#btnBuscar")
var btnEliminar = document.querySelector("btnEliminar")
var btnImprimir = document.querySelector("btnImprimir")
var 

var ruta = new Ruta


btnAgregar.addEventListener("click", () => {
    let nombre = Nbases.value 
    let minutos = Number(MiBases.value)
    let base = new Base (nombre, minutos)
    ruta.AgregarB(base)
    console.log(ruta)
})

btnBuscar.addEventListener("click", () => {
    let nombre = Nbases.value
    let minutos = Number(MiBases.value)
    let buscar = new Buscar(nombre,minutos)
    ruta.BuscarB(buscar)
    console.log(ruta)
})

btnEliminar.addEventListener("click",()=>{
    let nombre = Nbases.value
    ruta.eliminarB(nombre)
    console(ruta)
})

btnImprimir.addEventListener("click", () => {
    ruta.listaB()
    console.log()
})

btn
