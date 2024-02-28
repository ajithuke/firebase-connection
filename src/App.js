import './App.css'
import {getDatabase,ref,set} from 'firebase/database'
import {app} from './firebase.js'

const db = getDatabase(app)

function App() {

  const writeData = ()=>{
    set(ref(db,"student/1"),{
      RollNo:4,
      Name:'Ajit Huke'
    })
  }

  return (
    <div className="App">
      <h1>Firebase App</h1>
      <button onClick={writeData}> Insert Data </button>
    </div>
  );
}

export default App;