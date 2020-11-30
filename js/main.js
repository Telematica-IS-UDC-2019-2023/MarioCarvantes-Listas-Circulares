import Base from "./clases/base.js"
import Ruta from "./clases/ruta.js"

var Nbases = document.querySelector("#Nbases")
var MiBases = document.querySelector("#MiBases")
var InsertarBase = document.querySelector("#InsertarBase")
var EListaB = document.querySelector("#EListaB")
var ENombreB = document.querySelector("#ENombreB")
var EDuracionB = document.querySelector("#EDuracionB")
var ESiguienteB = document.querySelector("#ESiguienteB")
var EAnteriorB = document.querySelector("#EAnteriorB")

var BInicio = document.querySelector("#BInicio")
var HInicio = document.querySelector("#HInicio")
var HFinal = document.querySelector("#HFinal")

var btnAgregar = document.querySelector("#btnAgregar")
var btnBuscar = document.querySelector("#btnBuscar")
var btnEliminar = document.querySelector("btnEliminar")
var btnImprimir = document.querySelector("btnImprimir")
var btnInsertar = document.querySelector("btnInsertar")
var btnTargeton = document.querySelector("#btnTargeton")

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
    let base = ruta.BuscarB(nombre)
    ENombreB.innerHTML = "Nombre" + base.nombre
    EDuracionB.innerHTML = "Duracion" + base.minutos
    ESiguienteB.innerHTML = " Base Siguiente" + base.siguiente.nombre
    EAnteriorB.innerHTML = " Base Anterior" + base.anterior.nombre

    console.log("Nombre" + base.nombre)
    console.log("Tiempo" + base.minutos)
    console.log("Base Siguiente" + base.siguiente.nombre)
    console.log("Base anterior" + base.anterior.nombre)
    
})

btnInsertar.addEventListener("click",()=> {
    let nombre = Nbases.value
    let minutos = Number(MiBases.value)
    let posicion = Number(InsertarBase.value)
    let base = new Base(nombre,minutos)

    ruta.InsertarBase(base,posicion)
    console.log(ruta)
})

btnImprimir.addEventListener("click", ()=> {
    EListaB.innerHTML = "Bases" + ruta.listaB()
    console.log(ruta.listaB())
})

btnEliminar.addEventListener("click", ()=> {
    let nombre = Nbases.value
    ruta.EliminarB(nombre)

    console.log(ruta)
})

btnTargeton.addEventListener("click", ()=> {
    let HInicio = new Date()
    HInicio.setHours(HInicio.value.slice(0,2))
    HInicio.setMinutes(HInicio.value.slice(-2))

    let HFinal = new Date()
    HFinal.setHours(HFinal.value.slice(0,2))
    HFinal.setMinutes(HFinal.value.Slice(-2))

    let nombre = BInicio.value

    console.log(ruta.NuevoRecorrido.nombre.HInicio.HFinal)
})