import './App.css';
import CarInfo from './components/CarInfo';

function App() {
    return (
        <div className="App">
            {/* <CarInfo car="BMW" age="3" />
            <CarInfo car="Porsche" age="2" /> */}

            <CarInfo car="BMW" age={3} />
            <CarInfo car="Porsche" age={2} />
        </div>
    );
}

export default App;
