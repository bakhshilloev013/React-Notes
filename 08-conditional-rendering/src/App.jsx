import './App.css';
import CarInfo from './components/CarInfo';

function App() {
    return (
        <div className="App">
            {/* <CarInfo car="BMW" age={3} hasCar="true"/>
            <CarInfo car="Porsche" age={2} hasCar="" /> */}

            <CarInfo car="BMW" age={3} hasCar={true} />
            <CarInfo car="Porsche" age={2} hasCar={false} />
        </div>
    );
}

export default App;
