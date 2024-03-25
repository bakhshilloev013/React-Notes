
import { persons } from './data/persons';
import './App.css';


function App() {
    return <div className="App">
        {persons.map(person => {
            return <h1>{person.first_name}</h1>
        })}
    </div>;
}

export default App;
