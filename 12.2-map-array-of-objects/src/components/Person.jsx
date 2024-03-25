function Person(props) {
    const { id, first_name, last_name, email, img } = props;
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>
                {first_name} {last_name}
            </h3>
            <h4>{email}</h4>
        </div>
    );
}

export default Person;
