import './App.css'
import {getDatabase} from 'firebase/database'
import {app} from './firebase.js'

const db = getDatabase(app)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Firebase App
      </header>
    </div>
  );
}

export default App;