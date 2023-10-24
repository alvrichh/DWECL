/*
La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.
      

Ingredientes vegetarianos: Pimiento y Tofu.
Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Realizar una aplicación web que pregunte al usuario:
Si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija.
Si pulsas cancelar, debe preguntar de nuevo.
Si el ingrediente elegido no es válido, debe pedir de nuevo introducir el ingrediente.
Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas. 
Al final se debe mostrar por mensaje tipo alert si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.
Si en algún momento de la aplicación se pulsa cancelar (excepto en la primera pregunta), la aplicación termina. 
Por simplicidad, suponemos que el usuario escribe correctamente las mayúsculas y minúsculas.

By: Álvaro Rodríguez Molina
*/
let fin = true;
// Variable para repetir bucle de los ingredientes
let again = true;

while (fin) {
    //Declaro un mensaje para mostrar los ingredientes de las pizzas
    let mensaje;
    // Pregunta al usuario si quiere una pizza vegetariana
    let pizzaVeg = prompt("¿Quieres una Pizza vegetariana? SI / NO");

    if (pizzaVeg && pizzaVeg.toLowerCase() === "si") {
        do {
            let ingrediente = prompt("¿Qué ingrediente quieres? \n1 - Pimiento\n2 - Tofu");
            // Verificar si se ha cancelado la selección de ingredientes
            if (ingrediente === null) {
                mensaje = "Pedido Cancelado.";
                break;
            } else {
                switch (parseInt(ingrediente)) {
                    case 1:
                        mensaje = "La pizza es vegetariana y lleva:\nTomate, Mozarela y Pimiento";
                        again = false;
                        break;
                    case 2:
                        mensaje = "La pizza es vegetariana y lleva:\nTomate, Mozarela y Tofu";
                        again = false;
                        break;
                    default:
                        alert("Ingrediente no válido. Vuelva a seleccionar.");
                        break;
                }
            }
        } while (again === true);
        alert(mensaje);
        alert("Gracias por usar nuestro servicio de pedidos de pizza!");

    } else if (pizzaVeg && pizzaVeg.toLowerCase() === "no") {
        do {
            let ingrediente = prompt("¿Qué ingrediente quieres?\n1 - Pepperoni\n2 - Jamón\n3 - Salmón");
            if (ingrediente === null ) {
                mensaje = "Pedido Cancelado.";
                break;
            } else {
                switch (parseInt(ingrediente)) {
                    case 1:
                        mensaje = "La pizza no es vegetariana y lleva:\nTomate, Mozarela y Pepperoni";
                        again = false;
                        break;
                    case 2:
                        mensaje = "La pizza no es vegetariana y lleva:\nTomate, Mozarela y Jamón";
                        again = false;
                        break;
                    case 3:
                        mensaje = "La pizza no es vegetariana y lleva:\nTomate, Mozarela y Salmón";
                        again = false;
                        break;

                    default:
                        alert("Ingrediente no válido. Vuelva a seleccionar.");
                        break;
                }
            }
        } while (again === true)
        alert(mensaje);
        alert("Gracias por usar nuestro servicio de pedidos de pizza!");

    } else {
        alert("Introduzca una respuesta válida");
    }
}
