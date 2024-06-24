import _ from 'underscore';

/**
 *  Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCartas ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {arrray<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('Tipos de carta es obligatorio');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos Especiales es obligatorio');
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}