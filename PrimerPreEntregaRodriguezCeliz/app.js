// CARGAR CREDITOS EN LA PAGINA

function cargarCreditos(creditos, medioPago) {
    switch (medioPago) {
        case "Debito":
                let saldoTarjeta = 4000;
                if (creditos <= saldoTarjeta) {
                    console.log("se acreditaron " + creditos + " en tu cuenta")
                    return creditos
                }
                else {
                    console.log("saldo insuficiente")
                }
            break;
        
        case "Tarjeta Credito":
            let limiteCredito = 5000;
            if (creditos <= limiteCredito) {
                console.log("se acreditaron " + creditos + " en tu cuenta")
                return creditos
            }
            else {
                console.log("Limite insuficiente")
            }
            break;

        case "efectivo":
            console.log("tu codigo de carga es 623742") // la idea es que se genere un codigo para realizar la carga
            break;
        
        default:
            console.log("No se selecciono una opcion valida para la carga de creditos")
            break;
    }
}

let saldoCuenta1 = cargarCreditos(500, "Tarjeta Credito");

let precioLibro = 200;

function sumarTotal(){
    let precioTotal = 0;
    let agregarProducto = prompt("desea agregar un libro? 1)si 2)No");
    
    while (agregarProducto != 2) {
        precioTotal = precioTotal + precioLibro
        agregarProducto = prompt("desea agregar otro libro? 1)SI 2)NO");
        
    };
    console.log("el total es de " + precioTotal)
    return precioTotal
};

compra1 = sumarTotal();

function realizarCompra(saldoCuenta, precioTotal) {
    if (precioTotal <= saldoCuenta) {
        console.log("Transaccion Realizada");
    }
    else{
        console.log("Saldo de la cuenta es insuficiente");
    }
};

realizarCompra(saldoCuenta1, compra1);