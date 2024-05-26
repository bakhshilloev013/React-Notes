function UserName(props) {
    console.log(props);
    // этот компонент обращаясь к функции в свойстве children передаёт ей значение
    return props.children('Tommy');
}

export default UserName;
