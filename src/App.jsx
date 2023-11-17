import { useState } from 'react'
import './App.css'
import { Header } from './componentes/header'
import { FormAddMoney } from './componentes/FormAddMoney'
import { MainControl } from './componentes/MainControl';


function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid
                    ? <MainControl count={count}/>
                    : <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>



  return (
    <div className='App'>
      <Header />
      { component }
    </div>
  )
}

export default App
