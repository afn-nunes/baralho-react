import React from 'react';
import styled from "styled-components";
import {Card} from '../../components'
export function Hand(props) {
    const { jogadores } = props

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