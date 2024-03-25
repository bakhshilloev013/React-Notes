import Person from './Person';
import { persons } from '../data/persons';

function Persons() {
    return (
        <div className='cards'>
            {persons.map((person, i) => {
                return <Person key={i} {...person} />;
            })}
        </div>
    );
}

export default Persons;
