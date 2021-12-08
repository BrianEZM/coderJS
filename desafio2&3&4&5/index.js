// VAMOS A SIMULAR VIAJES Y SUS DURACIONES SEGUN DIFERENTES VARIABLES (distancia, velocidad, clima, pesos de carga, consumo de combustible)


// VAMOS A CREAR ALGUNOS OBJETOS PARA DARTE TANGIBILIDAD AL ASUNTO

const javoDriver = {
    
    tipo: "humano",
    edad: 30,
    trabajo: "te transporta lo que le pidas",
    sueño: "medio dormilon",
    experiencia: {

        años: "un monton de años de exp",
        carga: "se dice que transportó hasta materiales radioactivos",
        fortaleza: "gran piloto de lluvia",
        debilidad: "le gusta parar mucho por el camino"

    }
}

const javineta = {

    tipo: "Camion",
    color: "Negro con llamas rojas",
    modelo: 2004,
    marca: "FIAT",
    motor: {

        fuerza: "160 CV",
        nitro: "No tiene nitro",
        turbo: "No tiene turbo",

    }
}

function Camiones (marca, color, modelo, fuerza) {

    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.fuerza = fuerza;

}

const camion2 = new Camiones ("Mack", "Blanco", "2009", "re polenta porque es Mack");
const camion3 = new Camiones ("Autocar", "Rojo", "1988", "es el de la peli Halcon asique tiene la fuerza de Stallone");


// VAMOS A INTRODUCIRLE EL SIMULADOR AL USUARIO Y DARLE LA OPCION DE ELEGIR ENTRE DISTINTAS OPCIONES

alert("En este simulador vamos a emular los viajes de Javi en su aventura como camionero");
console.log("autonomia" in javineta);
alert("Por defecto vamos a iniciar el simulador con la Javineta, que tiene las siguientes caracteristicas: " + javineta.tipo + ", " + javineta.color + ", " + javineta.modelo + ", " + javineta.marca + ". Nitro: " + javineta.motor.nitro);


let eleccion = prompt("¿Deseas probar otro camion? podes elegir entre: camion2 o camion3");

if (eleccion == "camion2") {
    alert("Seleccionaste el camion2, tiene las siguientes caracteristicas: " + camion2.marca + ", " + camion2.color + ", " + camion2.modelo + ". Fuerza: " + camion2.fuerza);
} else if (eleccion == "camion3") {
    alert("Seleccionaste el camion3, tiene las siguientes caracteristicas: " + camion3.marca + ", " + camion3.color + ", " + camion3.modelo + ". Fuerza: " + camion3.fuerza);
} else {
    alert("La javineta, la mejor eleccion.")
}


// EMPEZAMOS CALCULANDO SIMPLEMENTE DISTANCIA Y VELOCIDIAD PROMEDIO

let destino = prompt("¿Cual es el destino de tu viaje");
let distancia = parseInt(prompt("¿Cual es la distancia en KM hasta " + destino + "?"));
let velocidad = parseInt(prompt("¿A que velocidad en KM/H, en promedio, viajas a " + destino + "?"));

let duracion = parseInt(distancia / velocidad + "hs.");

// ACA INCLUIMOS EL FACTOR LLUVIA

let lluvia = prompt("¿Esta pronosticado lluvia? si/no");

// ACA INCLUIMOS EL FACTOR "CARGA TRANSPORTADA (en TONELADAS)" CON UN BUCLE PARA DAR LUZ VERDE OPERATIVO A LA CARGA MAXIMA

const cargaMaxima = 25;
let cargaTransportada = 0;

while (cargaTransportada < cargaMaxima) {

    cargaTransportada++;
    console.log("Tu camión esta en condiciones de operar.");
}

// CREAMOS FUNCION QUE RE-UTILIZAREMOS EN NUESTRO CODIGO:

function timerGps() {
    if (duracion >= 12 && duracion < 18){
        alert("Tu viaje a " + destino + " va a durar mas de " + duracion + "hs, deberias tomar al menos 1 descanso durante el camino.")
    }else if(duracion >= 18 && duracion < 24){
        alert("Tu viaje a " + destino + " va a durar mas de " + duracion + "hs, deberias tomar al menos 2 descansos durante el camino.")
    }else if(duracion >= 24 && duracion < 48){
        alert("Tu viaje a " + destino + " va a durar mas de " + duracion + "hs, deberias tomar al menos 3 descansos durante el camino.")
    }else if(duracion < 12){
        alert("Tu viaje a " + destino + " va a durar menos de " + duracion + "hs, podes ir de un solo tiron, no seas pussy.")
    }else{
        alert("Tu viaje a " + destino + " va a durar mas de " + duracion + "hs, es insalubre, renuncia.")
    };
}

function consumoCombustible(distancia,consumo) {
    let cargaCombustible = distancia * consumo;
    return cargaCombustible;
}

function consumoAireAc() {
    let reservaCombustible = consumoLitros * distancia * 1.5;
    return reservaCombustible;
}

// ACA CONSIDERAMOS AMBOS FACTORES: LLUVIA + CARGA MAXIMA OPERTAIVA TRANSPORTADA PARA TENER EN CUENTA DURACION EN ESTE ESCENARIO

if (lluvia == "si" && cargaTransportada == 25) {
        
    alert("No podes ir a la velocidad promedio, tenes que ir mas lento, tu duración de viaje es: ");

    duracion = duracion * 2;

    timerGps();
    
} else {
    
    alert("Al no estar pronosticado lluvia la duración del viaje es: ");
    
    duracion = duracion * 1.5;

    timerGps();
}

// RECOMENDAMOS AL USUARIO (EL JAVI) QUE TENGA EN CUENTA EL CONSUMO DE COMBUSTIBLE (usamos functions):


let consumoLitros = prompt("¿Cuantos litros de combustible consume el camion por kilometro?");

    alert("Hasta tu destino consumiras " + consumoCombustible(distancia,consumoLitros) + " litros de combustible en total");

let temperaturaClima = prompt("¿Usas el aire acondicionado durante este viaje a " + destino + "?");

if (temperaturaClima == "si") {

    alert("Tu consumo de combustible se incrementará. Hasta tu destino consumiras " + consumoAireAc() + " litros de combustible en total")

} else {
    alert("Si no usas el AA tu consumo de combustible sera el mismo: " + consumoCombustible(distancia,consumoLitros) + " litros de combustible en total");
}

