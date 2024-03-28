import './App.css';

function App() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => console.log(json));

    return <div className="App"></div>;
}

export default App;
