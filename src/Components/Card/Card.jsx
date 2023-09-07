import { StyledCard } from "./card"

export const Card = ({object, removeItemFromList})=>{
    return(
        <StyledCard type={object.type}>
            <div>
                <h2>{object.name}</h2>
                <p>{object.type}</p>
            </div>
            <div>
                <p>R$ {object.value},00</p>
                <button onClick={()=>{removeItemFromList(object.id)}}>Excluir</button>
            </div>
        </StyledCard>
    )
}

export const EmptyMessage =()=>{
    return(
        <li>
            <h1>Você ainda não possui nenhum lançamento</h1>
        </li>
    )
}