// Функция которая генерирует рандомное число и возвращает её
function generateRandomNum(max) {
    return parseInt(Math.random() * max);
}

// экспортируем функцию
export default generateRandomNum;