// Создаём переменную App который будет содержать в себе функцию, которая представляет из себя полноценный компонент который возвращает JSX код
const App = (props) => {
    // props - это объект со свойствами этого компонента
    const { initialBtnText, initialClassList } = props;

    // Строка ниже это React Hook - который называется useState. Он используется для того чтобы менять состояние компонента, при каждом изменени нового состояния приложение ререндирует страницу где ввелись изменения
    // Этот хук возвращает массив с двумя значениями, этот массив мы деструктурируем чтобы мы могли работать с этими двумя значениями. первое значение это состояние, второе значение это функция при вызове которого необходимо передавать новое состояние, а в самом вызове хука useState ему передаётся первоначальное состояние.
    const [btnText, setBtnText] = React.useState(initialBtnText);
    const [classList, setClassList] = React.useState(initialClassList);
    const onClickHandler = () => {
        setBtnText('Hello from React JSX');
        setClassList('green-btn');
    };

    return (
        <div className="app">
            <button className={classList} id="my-button" onClick={onClickHandler}>
                {btnText}
            </button>
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialBtnText="Click me please" initialClassList="" />); // Соответсвенно вовремя рендеринга вашего компонента нужно передавать не переменную а компонент App. P.S: пользовательские компоненты именуются с заглавной буквы
// Во время вызова компонента передаём ему свойства
