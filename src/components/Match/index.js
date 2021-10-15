import { Carousel } from 'react-bootstrap';
import { Card, Score, Table } from '../../components'
import styled from "styled-components";


export function Match(props) {

    const { jogadores } = props
    return (
        <DivMatch>
            <DivScore>
                <Score team='Equipe 1' score='51'></Score>
                <Score team='Equipe 2' score='49'></Score>
            </DivScore>
            <Div>
                <Table></Table>
                <StyledCarousel variant="dark">{
                    jogadores.map((jogador, key) => (
                        <Carousel.Item className="divJogador" id={`carouselItem` + key} pause="false">
                            <DivPlayers className="slidecarrossel">
                                <h1>{jogador.nome}</h1>
                                <DivCard className="divCarta" id={`divCard ${key}`}>
                                    {jogador.mao.map((carta, index) => (
                                        <Card source={carta.image} key={`image ${index}`} />
                                    ))}
                                </DivCard>
                            </DivPlayers>
                        </Carousel.Item>
                    ))
                }
                </StyledCarousel>
            </Div>
        </DivMatch>

    )
}

const DivCard = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;   
  flex-direction: row   

`;

const DivPlayers = styled.div`
  display: flex;    
  align-items: center;
  flex-direction: column;    
`;

const StyledCarousel = styled(Carousel)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28vh;
`

const DivScore = styled.div`
  display: flex;  
  justify-content: space-around;  
  flex-direction: row;
  width: 100vw;
  padding: 5vh;
`;
const DivMatch = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;


