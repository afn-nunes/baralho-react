import React from 'react'
import { Card} from '../../components'
import styled from "styled-components";
import ico from '../../assets/icones/ico.png'

const ranks = ['A', '0', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
const suits = ['H', 'S', 'D', 'C']

let deck = []

suits.forEach(suit => ranks.forEach(rank => deck.push(
  {
    code: rank + suit,
    image: 'http://deckofcardsapi.com/static/img/' + rank + suit + '.png'
  }
)))

export function Deck() {

  return (
    < DivDeck>
      <Divheader>
        <h1>DECK</h1>
        <StyledIco src={ico} alt="Icone" />                
      </Divheader>
      <DivCard>
        {
          deck.filter((c) => c.code[0] !== "0" & c.code[0] !== "8" & c.code[0] !== "9")
            .map((img, key) => (
              <Card source={img.image} id={key}/>
            ))
        }
      </DivCard>
    </DivDeck >
  )
}

export default Deck;

const DivCard = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;    
  width: 60vw;
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