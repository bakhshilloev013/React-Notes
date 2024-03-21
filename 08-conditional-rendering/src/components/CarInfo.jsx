// function CarInfo({ car, age, hasCar }) {
//     const text = hasCar
//         ? `My ${car} is ${age} years old`
//         : "I don't have a car";
//     return <h2>{text}</h2>;
// }

function CarInfo({ car, age, hasCar }) {
    return hasCar ? (
        <h2>
            My {car} is {age} years old
        </h2>
    ) : (
        <h2>I don't have a car</h2>
    );
}

export default CarInfo;
