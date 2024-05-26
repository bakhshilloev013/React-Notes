import UserContext from '../context/UserContext'; // импортируем контекст чтобы использовать контекст внутри этого компонента

function UserInfo() {
  return (
      // обернули наш компонент в Consumer чтобы получить здесь контекст 
        <UserContext.Consumer>
            {(value) => <h1>{value}</h1>}
        </UserContext.Consumer>
    );
}

export default UserInfo;
