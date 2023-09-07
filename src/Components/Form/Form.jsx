import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import { StyledForm } from './form'

export const Form = ({financeList, setFinanceList})=>{
    const [Description, setDescription] = useState('')
    const [Value, setValue] = useState('')
    const [Type, setType] = useState('Entrada')

    const createObject =()=>{
        const newObject ={
            id: uuidv4(),
            name: Description,
            value: Value,
            type: Type,
        }
        return newObject
    }

    const submit = (e)=>{
        e.preventDefault();
        let element = createObject();
        setFinanceList([...financeList, element]);
        setDescription('')
        setValue('')        
    }

    return(
        <StyledForm onSubmit={submit}>
            <label htmlFor="Description">Descrição</label>
            <input type="text" id="Description" placeholder="Digite aqui a sua descrição" value={Description} onChange={(e)=>{setDescription(e.target.value)}} required/>
            <p>Ex: Compra de Roupas</p>

            <label htmlFor="Value"> Valor(R$)</label>
            <input type="number" id="Value" value={Value} onChange={(e)=>{setValue(e.target.value)}} required/>
            
            <label htmlFor="typeOfValue">Tipo de valor</label>
            <select id="typeOfValue" onChange={(e)=>{setType(e.target.value)}}>
                <option disabled>Selecione um tipo</option>
                <option value="Entrada">Entrada</option>
                <option value="Saida">Despesa</option>
            </select>
            <button type="submit">Inserir valor</button>
        </StyledForm>
    )
}