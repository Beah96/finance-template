import {Card, EmptyMessage} from "../Card/Card.jsx"
import { StyledListSection } from "./list.js"

export const List =({financeList, setFinanceList})=>{

    const removeItemFromList = (cardId)=>{
        setFinanceList(financeList.filter(element => element.id !== cardId))
    }

   if(financeList.length>0){

       return(
           <StyledListSection>
                <h2>Resumo Financeiro</h2>
                <ul>
                {financeList.map((element)=><Card key={element.id} object ={element} removeItemFromList={removeItemFromList}/>)}
                </ul>
           </StyledListSection>
       )

   }else{
        return(
            <StyledListSection>
                <h2>Resumo Financeiro</h2>
                <ul>
                    <EmptyMessage/>
                </ul>
           </StyledListSection>
        )
   }


}
