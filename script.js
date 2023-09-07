// la forma profesional, es crear variables que representen los selectores de html
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
// se pueden quitar los escuchadores de eventos del codigo html y agregar desde JS, con la propiedad addEventListener podemos hacer eso, se le dan 2 argumentos, el primero es el nombre del evento que querramos ejecutar y el codigo de JS que querramos ejecutar cuando suceda este evento.
// el evento sumarInputValues, LLEVA parentesis SOLAMENTE en codigo HTML, [sumarInputValues()], en codigo JS no lleva parentesis y tampoco lleva comillas
form.addEventListener('submit', sumarInputValues );
// aun con el evento ligado al form, la pagina se sigue recargando al dar al boton de calcular
// una de las formas de escuchar elementos en JS, es agregar el atributo onClick

// function sumarInputValues (event){
//     console.log({event});
//     event.preventDefault(); // hacemos un console.log para saber que esta haciendo el evento, y luego ponemos la propiedad prevent.Default al evento, lo que va a prevenir la accion default del sumbit (recargar) en el evento.
    
//     //este input.value esta tomando los valores de los inputs como strings, y no como numeros, se necesita hacer algo para que los tome como numeros


//     //console.log(input1.value + input2.value);

//     //con este codigo, lo que hacemos es crear un parrafo vacio en la pagina, para que js lo modifique usando los datos que den los usuarios, para que puedan verlo en la pagina y no en la consola
//     //para pasar los strings a numeros, basta con solo marcar que son Number y colocar el valor entre parentesis, pero asi ya no va a leer strings
//     const sumaInputs = (Number(input1.value) + Number(input2.value));
//     pResult.innerHTML = "Resultado: " + sumaInputs;
//     // si el codigo lo hacemos en un <form><form/>, lo que hace el codigo es agarrar el ultimo boton que exista y lo va a utilizar como un "submit" lo cual enviaria el resultado y recargaria la pagina
// }

btn.addEventListener('click', sumarInputValues );
function sumarInputValues (event){
    const sumaInputs = (Number(input1.value) + Number(input2.value));
    pResult.innerHTML = "Resultado: " + sumaInputs;
}
//tambien se puede solucionar forzando al boton a que sea un boton, haciendo type="button", yo tambien tengo la idea de que se podrian hacer 2 botones y ya jaja 