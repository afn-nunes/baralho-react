import React from 'react';
import styled from "styled-components";
import {Card} from '../../components'
export function Hand(props) {
    const { deck } = props
    const jogadores = [{ nome: "André", mao: {} },
    { nome: "Dario", mao: {} },
    { nome: "Wallace", mao: {} },
    { nome: "Gaspar", mao: {} }
    ]

    let inicio = 0;
    let final = 10;
    jogadores.forEach(jogador => {
        jogador.mao = deck.slice(inicio, final);
        inicio = inicio + 10;
        final = final + 10;
    })

    return (
        <DivDeck>
            {
                jogadores.map((jogador, key) => (
                    <DivJogador className="divJogador">
                        <div>
                            <h1>{jogador.nome}</h1>
                        </div>
                        <DivCard className="divCarta">
                            {jogador.mao.map((carta) => (
                                <Card source={carta.image} id={key}/>
                            ))}
                        </DivCard>
                    </DivJogador>


                ))
            }
        </DivDeck>
    );
}

const DivDeck = styled.div`
  display: flex;  
  flex-direction: column;  
  align-items: center;    
`;
const DivJogador = styled.div`
  display: flex;  
  flex-direction: column;  
  align-items: center;    
  width: 70vw;  
`;

const DivCard = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;   
  flex-direction: row     
`;

const StyledImg = styled.img`
  width: 10vh;  
`



