export default class Ruta{
    constructor(){
        this.inicio = null
    }

    AgregarB(nuevo){
        if(this.inicio === null){
            this.inicio = nuevo;
            this.inicio.siguiente = this.inicio;
            this.inicio.anterior = this.inicio; 

        }else{
            let t = this.inicio
            while(t.siguiente !=inicio){
                t = t.siguiente
            }
            t.siguiente = nuevo
            t.siguiente.anterior = t
            t.siguiente.siguiente = this.inicio
            this.inicio.anterior = nuevo
        }
    }

    BuscarB(nombre){
        let t = this.inicio
        if(t != null){
            while(t.nombre != nombre && t.siguiente != this.inicio){
                t = t.siguiente
            }
            if(t.siguiente === nombre){
                return t
            }else{
                alert("La base que esta buscando no se encuentra registrada")
            }
        }
    }

    eliminarB(nombre){
        let t = this.inicio

        if(this.inicio.nombre === nombre && this.inicio.siguiente === this.inicio){
            this.inicio = null

        }else if (this.inicio.nombre === nombre){
            this.inicio.siguiente.anterior = this.inicio.anterior
            this.inicio.anterior.siguiente = this.inicio.siguiente
            this.inicio = this.inicio.siguiente
        }else{
            while(t.siguiente.nombre != nombre){
                t = t.siguiente
            }

            if(t.siguiente.nombre === nombre){
                t.siguiente = t.siguiente.siguiente
                t.siguiente.anterior = t
            }else{
                alert("La base no se encontro")
            }
        }
    }

    insertarB(nuevo,posicion){
        let t = this.inicio
        if (posicion === 1){
            nuevo.anterior = t.anterior
            nuevo.anterior.siguiente = nuevo
            nuevo.siguiente = t
            t.anterior = nuevo
            this.inicio

        }else {
            let i = 1 
            while(i != posicion){
                if(t.siguiente != this.inicio){
                    t= t.siguiente
                    i++

                }else{
                    alert("la posicion es invalida")
                    break
                }
            }
            if(i === posicion){
                nuevo.anterior = t.anterior
                nuevo.siguiente = t
                nuevo.anterior.siguiente = nuevo
                nuevo.siguiente.anterior = nuevo
            }
        }
    }

    listaB(){
        let cont = ""
        let t = this.inicio
        cont = t.nombre + ""
        while (t.siguiente != this.inicio){
            cont += t.siguiente.nombre +""
            t = t.siguiente 
        }
        return cont
    }
}