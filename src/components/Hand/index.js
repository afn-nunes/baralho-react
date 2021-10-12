import React from 'react';
import { Card } from '../../components'
// const players = [
//     {nome: "Andre",listaDeCartas: []},
//     {nome: "Dario",listaDeCartas: []},
//     {nome: "Wallace",listaDeCartas: []},
//     {nome: "Pinheiro",listaDeCartas: []}
// ]


export function Hand(props) {
    const { deck } = props;

    const deckAux = deck.filter((c) => c.nome[0] !== "0" & c.nome[0] !== "8" & c.nome[0] !== "9")
        .sort(() => (Math.random() > .5) ? 1 : -1);

    const jogadores = []

    let b = 0;
    let end = 10;
    for (let index = 0; index < 4; index++) {
        jogadores.push({
            nome: "Jogador " + (index + 1),
            cartas: deckAux.slice(b, end)
        })
        b = b + 10;
        end = end + 10;
    }


    return (
        <div>
            {
                jogadores.map((jogador, key) => (
                    <div>
                        <div>
                            <h1>{jogador.nome}</h1>
                        </div>
                        <div>
                            {                        
                                jogador.cartas.forEach(c => {
                                    <Card source={c}></Card>
                                })
                            }
                        </div>

                    </div>

                ))
            }
        </div>
    );
}



