let btnText = 'Click me';
// Функция обработчика события, мы её вызовем во время нажатия кнопки
const onClickHandler = () => {
    btnText = 'Hello from React';
    console.log(btnText);
};

// Создаём переменную App который будет служить в виде компонента в котором содержится кнопка
const App = (
    // Обратите внимание на атрибут className которую мы ранее писали как обычный class. В React это пишется таким образом потому что это JavaScript код а не HTML. Вспомним JavaScript, к классу элемента мы обращались через свойство className
    // И ещё это слово class зарезервировано в JS. Чтобы избежать путаницы между class в JS и class атрибута в HTML пишется className
    <div className="app">
        {/* Обратите внимание на свойство onClick ранее мы в HTML писали в виде атрибута onclick, в JSX код он имеет camelCase нотацию, чтобы различать HTML атрибут и JSX свойство обработчика событий */}
        <button id="my-button" onClick={onClickHandler}>
            {/* Чтобы писать JS выражение внутри JSX кода вам необходимо это JS выражение в пару фигурных скобок */}
            {btnText}
        </button>
    </div>
);

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(App); // Именно компонент App нужно загрузить на страницу
