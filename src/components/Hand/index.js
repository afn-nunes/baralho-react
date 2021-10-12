import { Card } from '../../components'
import styled from "styled-components";
import React from 'react';

const players = [
    {nome: "Andre",listaDeCartas: []},
    {nome: "Dario",listaDeCartas: []},
    {nome: "Wallace",listaDeCartas: []},
    {nome: "Pinheiro",listaDeCartas: []}
]

function distribuirCartas(deck) {
    let i = 0;          
    while (i < deck.lenght) {        
        players.foreach((player) => {            
            player.listaDeCartas().push(deck[i].img);
            i++;
        }
        )
    }
}

export function Hand(props) {
    const { deck } = props;

    deck.map((card) =>{
        players.map((player) => {            
            player.listaDeCartas.push(card);
        })
    })

    return (
        <div>
            {
                players.map( (jogador, key) => {                    
                    jogador.listaDeCartas.map((carta) =>{                         
                        console.log(carta.img)
                    })                
                })                   
            }
                        
        </div>
    );
}



