import Person from './components/Person';
import { persons } from './data/persons';
import './App.css';

// function App() {
//     return (
//         <div className="App">
//             {persons.map((person, i) => {
//                 return (
//                     <Person
//                         key={i}
//                         id={person.id}
//                         firstName={person.first_name}
//                         lastName={person.last_name}
//                         email={person.email}
//                         img={person.img}
//                     />
//                 );
//             })}
//         </div>
//     );
// }

function App() {
    return (
        <div className="App">
            {persons.map((person, i) => {
                return <Person key={i} {...person} />;
            })}
        </div>
    );
}

export default App;
