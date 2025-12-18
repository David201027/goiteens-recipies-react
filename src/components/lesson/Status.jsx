const Status = ({ isOnline }) => {
  return (
    <p className={isOnline ? "online" : "offline"}>
      {isOnline ? "Користувач онлайн" : "Користувач офлайн"}
    </p>
  );
};

export default Status;
