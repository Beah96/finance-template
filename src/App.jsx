import { Header } from './Components/Header/Header.jsx'
import { useState } from 'react'
import { Form } from './Components/Form/Form.jsx'
import { TotalMoney } from './Components/TotalMoney/totalMoney.jsx'
import { List } from './Components/List/List.jsx'
import { Reset } from './styles/reset'
import { GlobalStyle } from './styles/globalStyle'

function App() {
    const [financeList, setFinanceList] = useState([])

  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <Header/>
      <main>
        <div>
          <span>
            <Form financeList={financeList} setFinanceList={setFinanceList}/>
            <TotalMoney financeList={financeList}/>
          </span>
          
          <List financeList={financeList} setFinanceList={setFinanceList}/>
        </div>
      </main>
    </>
  )
}

export default App
