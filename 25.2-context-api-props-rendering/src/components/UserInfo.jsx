import UserContext from '../context/UserContext'; // импортируем контекст чтобы использовать контекст внутри этого компонента
import UserName from './UserName';

function UserInfo() {
    // Пример того как работает Consumer: тут показано как в свойство children компонента UserName передаётся функция
    return <UserName>{value => <h1>{value}</h1>}</UserName>
    // return (
    //     <UserContext.Consumer>
    //         {(value) => <h1>{value}</h1>}
    //     </UserContext.Consumer>
    // );
}

export default UserInfo;
