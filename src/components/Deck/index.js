import React from 'react'
import { Card, Hand} from '../../components'
import styled from "styled-components";
import ico from '../../assets/icones/ico.png'
const context = require.context('../../images', true, /.png$/);
const cache = {};


function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(context);

const cards =
  Object.entries(cache).map(module => ({
    img: module[1].default,
    nome: module[0].replace('.png', '').replace('./', '')
  }
  ));

export function Deck() {

  return (    
    < DivDeck>
      
      <Divheader>
        <h1>DECK</h1>
        <StyledIco src={ico} alt="Icone" />
      </Divheader>
      <DivCard>
      <Hand deck={cards}/>
      </DivCard>
    </DivDeck >
  )
}

export default Deck;

const DivCard = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;    
  width: 70vw;
  flex-wrap: wrap;
`;
const DivDeck = styled.div`
  display: flex;  
  flex-direction: column;  
  align-items: center;    
`;

const StyledIco = styled.img`
  width: 5vh;
  height: 5vh;
  margin-left: 5px;
`
const Divheader = styled.div`
  display: flex;
  justify-content: center;
  width: 5vh;
  padding: 5px;
  align-items: center;
`