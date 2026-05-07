import './App.css'
import Welcome from './Welcome.jsx'
import Counter from './Counter.jsx'

function App() {

  const frutas = ['Maçã','Laranja','Uva'];

  return (
    <>

    <ul>
      {frutas.map((fruta)=>
        <li key={fruta}>{fruta}</li>
      )}
    </ul>

    <Welcome name='BBZINHO FABIO'/>
    <Welcome name='NEXTSTAGE BB'/>
    <Counter/>
    </>
  )
}

export default App
