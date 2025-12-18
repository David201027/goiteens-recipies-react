const User = ({ name, age }) => {
  return (
    <li className="user-item">
      <span>{name}</span> — <span>{age} років</span> —{" "}
      <span className={age >= 21 ? "user-allowed" : "user-denied"}>
        {age >= 21 ? "Доступ дозволено" : "Доступ заборонено"}
      </span>
    </li>
  );
};

export default User;
