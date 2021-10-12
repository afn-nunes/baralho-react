import React, { useState } from 'react'
import { Card, Hand } from '../../components'
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
      <Hand deck={deck} />
    </DivDeck >
  )
}

export default Deck;


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