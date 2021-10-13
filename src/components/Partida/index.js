import { Carousel } from 'react-bootstrap';
import { Card } from '../../components'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
export function Partida(props) {
    const { jogadores } = props
    return (
        <StyledCarousel variant="dark">{
            jogadores.map((jogador, key) => (
                <Carousel.Item className="divJogador" id={`carouselItem` + key} pause="false">                    
                        <DivJogadores className="slidecarrossel">
                            <h1>{jogador.nome}</h1>
                            <DivCard className="divCarta">
                                {jogador.mao.map((carta) => (
                                    <Card source={carta.image} id={key} />
                                ))}
                            </DivCard>
                        </DivJogadores>                    
                </Carousel.Item>
            ))
        }
        </StyledCarousel>

    )
}
const DivCard = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;   
  flex-direction: row   

`;

const DivJogadores = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const StyledCarousel = styled(Carousel)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;    
`

const divItemStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

