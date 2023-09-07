import { StyledDiv } from "./totalMoney"

export const TotalMoney =({financeList})=>{
    let entries = []
    financeList.forEach(element=>{
        if(element.type == "Entrada"){
            entries.push(parseFloat(element.value))
        }
    })
    let debits = []
    financeList.forEach(element=>{
        if(element.type == "Saida"){
            debits.push(parseFloat(element.value))
        }
    })
    
    let allEntries = entries.reduce((previousNumber, currentNumber) => previousNumber + currentNumber,0)
    let allDebits = debits.reduce((previousNumber, currentNumber) => previousNumber + currentNumber,0)
    
    let sum = allEntries - allDebits


    if(financeList.length > 0){
        return(
            <StyledDiv>
                <span>
                    <h3>Valor Total:</h3>
                    <p>R$ {sum},00</p>
                </span>
                <p>O valor se refere ao saldo</p>
            </StyledDiv>
        )

    } else{
        return( 
        <StyledDiv message="none"></StyledDiv> 
        )
    }

}