// function CarInfo(props) {
//     return <h2>My {props.car} is {props.age} years old</h2>;
// }

// function CarInfo(props) {
//     const { car, age } = props;
//     return <h2>My {car} is {age} years old</h2>;
// }

function CarInfo({ car, age }) {
    return <h2>My {car} is {age} years old</h2>;
}

export default CarInfo;
