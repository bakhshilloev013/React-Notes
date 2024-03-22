import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum'; // импортируем функцию


function RandomNumber({maxNum}) {
    // Используем хук useState для управления состоянием компонента
    const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));

    // Функция обработчик события
    const changeRandomNum = () => {
        // Меняем состояние компонента с помощью второго значения(функцией) хука useState
        setRandomNum(generateRandomNum(maxNum));
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    );
}

export default RandomNumber;
