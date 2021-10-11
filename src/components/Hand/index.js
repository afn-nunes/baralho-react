import { Deck } from '../../components'
import styled from "styled-components";
import React from 'react';


export function Hand() {
    return (
        <DivContent id="divContent">
            <h1>Player 1</h1>            
            <Deck></Deck>            
        </DivContent>
    );
}

const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
`;

