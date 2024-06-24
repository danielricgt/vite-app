import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";


// turno de la computadora
/**
 * 
 * @param {number} puntosMinimos minimos que la computadora necesita para ganar
 * @param {HTMLElement}puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora eleemtno HTML para nostrar las cartas
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, divCartasComputadora, puntosHTML, deck = [] ) => {
    if (!puntosMinimos) throw new Error ('puntos minimos son necesarios');
    if (!puntosHTML) throw new Error ('puntos HTML es necesarios');
let puntosComputadora = 0 ;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
