// Создаём переменную App который будет содержать в себе функцию, которая представляет из себя полноценный компонент который возвращает JSX код
const App = () => {
    const [btnText, setBtnText] = React.useState('Click me please');
    const onClickHandler = () => {
        setBtnText('Hello from React JSX');
    };

    return (
        <div className="app">
            <button id="my-button" onClick={onClickHandler}>
                {btnText}
            </button>
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />); // Соответсвенно вовремя рендеринга вашего компонента нужно пережавать не переменную а компонент App. P.S: пользовательские компоненты именуются с заглавной буквы
