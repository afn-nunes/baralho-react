
import styled from "styled-components";
export function Card(props) {
    const { source, id } = props
    return (
        <CardImg src={source} key={'card' + id} />
    )
}

const CardImg = styled.img`
  padding: 5px;  
  max-height: 8vw;
`