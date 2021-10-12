import { Carousel } from 'react-bootstrap';
import {Card} from '../../components'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
export function Partida(props) {
    const { jogadores } = props
    return (
        <Carousel>{
            jogadores.map((jogador, key) => (
                <Carousel.Item className="divJogador">
                    <h1>{jogador.nome}</h1>

                    <DivCard className="divCarta">
                        {jogador.mao.map((carta) => (
                            <Card source={carta.image} id={key} />
                        ))}
                    </DivCard>
                </Carousel.Item>

            ))
        }
        </Carousel>
        )   
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