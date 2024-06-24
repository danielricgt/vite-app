/**
 * Esta función me permite tomar una carta
 * @param {array<string>} deck es un arreglo de string
 * @returns {String} retonra la carta del deck pe: J10
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}