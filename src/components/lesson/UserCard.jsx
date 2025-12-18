const UserCard = ({ name, age, city }) => {
  return (
    <div className="card">
      <p><span className="title">Ім’я:</span> {name}</p>
      <p>Вік: {age}</p>
      <p>Місто: {city}</p>
    </div>
  );
};

export default UserCard;
