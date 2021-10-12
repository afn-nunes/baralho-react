import React from "react";
import { Deck, Hand, Partida } from '../components'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const jogadores = [{ nome: "André", mao: {} },
{ nome: "Dario", mao: {} },
{ nome: "Wallace", mao: {} },
{ nome: "Gaspar", mao: {} }
]
const ranks = ['A', '0', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
const suits = ['H', 'S', 'D', 'C']

let deck = []

suits.forEach(suit => ranks.forEach(rank => deck.push(
  {
    code: rank + suit,
    image: 'http://deckofcardsapi.com/static/img/' + rank + suit + '.png'
  }
)))

let deckAux = deck.sort(() => (Math.random() > .5) ? 1 : -1).filter((c) => c.code[0] !== "0" & c.code[0] !== "8" & c.code[0] !== "9")
let inicio = 0;
let final = 10;

jogadores.forEach(jogador => {
    jogador.mao = deckAux.slice(inicio, final);
    inicio = inicio + 10;
    final = final + 10;
})

export default function AppHome() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Sueca</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Baralho</Nav.Link>
              <Nav.Link href="/users">Cartas por jogador</Nav.Link>   
             < Nav.Link href="/partida">Partida</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path='/partida'><Partida jogadores={jogadores}/></Route>
          <Route path="/users"><Hand jogadores={jogadores} /></Route>
          <Route path="/"><Deck deck={deckAux}/></Route>          
        </Switch>
      </div>
    </Router>
  );
}